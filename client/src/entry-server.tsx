import { PassThrough } from 'stream';
import React from 'react'
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from './App'
import Store from './components/sections/blog/redux/store';
import { ArticleApiSlice } from './components/sections/blog/redux/api/article.api';
import { BlogTopic } from './types/blog_topic.enum';
import fetch, {Headers, Request, Response } from 'node-fetch';
import { ICookie } from 'cookie-universal';
import cookieUtils from './utils/cookie.utils';


Object.assign(globalThis, {
    fetch: fetch,
    Headers: Headers,
    Request: Request,
    Response: Response,
});

export const getPreloadedState = () => {
    return Store.getState()
}

export const resetStore = () => {
    Store.dispatch( ArticleApiSlice.util.resetApiState() )
}

export const prefetchApiData = async (path: string, cookies: ICookie) => {
    cookieUtils.overrideCookies(cookies)
    dispatchApiAction(path)
    await Promise.all(ArticleApiSlice.util.getRunningOperationPromises())
}

export const render = (path: string, context: {}) => {
    return ReactDOMServer.renderToString(
        <React.StrictMode>
            <StaticRouter location={path}>
                <App context={context} />
            </StaticRouter>
        </React.StrictMode>
    );
};

export const renderToPipe = async (path: string, context: {}): Promise<string> => {
    return new Promise((resolve) => {
        const duplex = new PassThrough();

        let bufs: Buffer[] = [];
        duplex.on("data", (chunk: Buffer) => {
            bufs.push(chunk)
        });

        duplex.on('end', function(){
            resolve(Buffer.concat(bufs).toString());
        })

        const { pipe, abort } = ReactDOMServer.renderToPipeableStream(
            <React.StrictMode>
                <StaticRouter location={path}>
                    <App context={context} />
                </StaticRouter>
            </React.StrictMode>,
            {
                onAllReady() {
                    pipe(duplex);
                },
                onError(error) {
                    console.error(error);
                    resolve(`${error}`)
                }
            }
        );
    })
};

interface ApiRouteMatch {
    regexp: RegExp,
    dispatch: (match: RegExpMatchArray) => void
}

const dispatchApiAction = (path: string): boolean => {
    const routes: ApiRouteMatch[] = [
        {
            regexp: /^\/blog(\/|$|\?)/,
            dispatch: (match: RegExpMatchArray) => {
                Store.dispatch( ArticleApiSlice.endpoints.getArticles.initiate(undefined) )
            }
        },
        {
            regexp: /^\/blog\/topic\/(.*?)(\/|$|\?)/,
            dispatch: (match: RegExpMatchArray) => {
                const topic = match[1] as BlogTopic
                Store.dispatch( ArticleApiSlice.endpoints.getArticles.initiate(topic) )
            }
        },
        {
            regexp: /^\/blog\/article\/(.*?)(\/|$|\?)/,
            dispatch: (match: RegExpMatchArray) => {
                Store.dispatch( ArticleApiSlice.endpoints.getArticleBySlug.initiate(match[1]) )
            }
        }
    ]

    routes.forEach((route) => {
        const match = path.match(route.regexp)
        if (match) {
            route.dispatch(match)
            return true
        }
    })

    return false
}