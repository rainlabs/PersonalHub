import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux.hooks';
import { fetchArticleById, fetchLatestArticles } from '../redux/actions/article.actions';
import { BlogTopic } from '../../../../types/blog_topic.enum';

export const useArticlesList = (topic?: BlogTopic) => {
    const dispatch = useAppDispatch();
    const articlesList = useAppSelector(state => state.articles.list);

    useEffect(() => {
        console.log('fetchArticles')
        dispatch(fetchLatestArticles(topic))
    }, [dispatch, topic])

    return articlesList
}

export const useArticle = (articleSlug: string) => {
    const dispatch = useAppDispatch();
    const article = useAppSelector(state => state.articles.currentArticle);

    useEffect(() => {
        if (article === null || article.attributes.slug !== articleSlug) {
            console.log(`fetchArticle ${articleSlug}`)
            dispatch(fetchArticleById(articleSlug))
        }
    }, [dispatch, articleSlug])

    return article
}