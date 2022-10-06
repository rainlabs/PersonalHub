import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux.hooks';
import { fetchArticleById, fetchLatestArticles } from '../redux/actions/article.actions';

export const useArticlesList = () => {
    const dispatch = useAppDispatch();
    const articlesList = useAppSelector(state => state.articles.list);

    useEffect(() => {
        if (articlesList.length === 0) {
            console.log('fetchArticles')
            dispatch(fetchLatestArticles())
        }
    }, [dispatch])

    return articlesList
}

export const useArticle = (articleId: number) => {
    const dispatch = useAppDispatch();
    const article = useAppSelector(state => state.articles.currentArticle);

    useEffect(() => {
        if (article === null || article.id !== articleId) {
            console.log(`fetchArticle ${articleId}`)
            dispatch(fetchArticleById(articleId))
        }
    }, [dispatch, articleId])

    return article
}