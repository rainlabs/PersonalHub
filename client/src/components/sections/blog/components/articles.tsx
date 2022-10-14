import React, { FC, useEffect, useRef, useState } from 'react';
import { BlogArticleData } from '../../../../types/blog_article_data';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import { StrapiModel } from '../../../../types/strapi.model';
import Loading from '../../../_loading';
import { useGetArticlesQuery } from '../redux/api/article.api';
import BlogArticlePreview from './article_preview';
import TopicName from './topic_name';

type Props = {
    topic?: BlogTopic
}

const BlogArticles: FC<Props> = ({ topic }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState<number>(1)
    const [compTopic, setCompTopic] = useState<BlogTopic | undefined>(topic)
    const { data: articles, isLoading, isFetching, isSuccess, isError } = useGetArticlesQuery({page, topic: compTopic})
    const [articlesList, setArticlesList] = useState<StrapiModel<BlogArticleData>[]>(articles?.data && import.meta.env.SSR ? articles.data : [])

    useEffect(() => {
        if (!import.meta.env.SSR) {
            window.addEventListener('scroll', onScroll)
        }

        if (isSuccess && articles?.data && articles.meta.pagination?.page === page) {
            setArticlesList([...articlesList, ...articles.data]);
        }

        return () => window.removeEventListener('scroll', onScroll)
    }, [articles, page, isFetching])

    useEffect(() => {
        if (topic) {
            rootRef.current?.scrollIntoView({behavior: 'smooth'});
        } else if (!import.meta.env.SSR) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        if (topic !== compTopic) {
            setCompTopic(topic)
            setPage(1)
            setArticlesList([])
        }
    }, [topic])

    function onScroll(event: Event) {
        const targetDoc: Document = event.target as Document;

        if (!isFetching && articles?.data && articles.meta.pagination && articles.meta.pagination.pageCount > page) {
            const { scrollTop, scrollHeight, clientHeight } = targetDoc.documentElement;
            const targetHeight = listRef.current ? listRef.current.clientHeight + listRef.current.offsetTop : scrollHeight

            if (scrollTop + clientHeight >= targetHeight) {
                setPage(page + 1)
            }
        }
    }

    function renderLoading() {
        if (isFetching || !articles) {
            return <Loading />
        }
    }

    function renderPreviews() {
        if (articlesList.length === 0) {
            return
        }

        return articlesList.map((el, i) => <BlogArticlePreview key={el.id} data={el.attributes} />)
    }

    return (
        <div ref={rootRef} className="container my-12 lg:my-24 px-6 mx-auto">
            <section className="text-gray-800 dark:text-slate-200 text-center lg:text-left">
                <h2 className="text-3xl mb-12 lg:mb-24 text-center font-normal">
                    {
                        compTopic ? <TopicName topic={compTopic} /> : <>Последние записи</>
                    }
                </h2>
                <div ref={listRef}>
                    { renderPreviews() }
                </div>
                { renderLoading() }
            </section>
        </div>
    )
}

export default BlogArticles;