import { AnyAction, ThunkAction, createAsyncThunk } from '@reduxjs/toolkit'
import { BlogArticleData } from '../../../../../types/blog_article_data'
import { BlogTopic } from '../../../../../types/blog_topic.enum'
import { StrapiModel } from '../../../../../types/strapi.model'
import ArticleService from '../services/article.service'
import ArticleSlice from '../slices/article.slice'
import { RootState } from '../store'

export const ArticleActions = ArticleSlice.actions

export const fetchLatestArticles = (topic?: BlogTopic): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        const response: StrapiModel<BlogArticleData>[] = await ArticleService.getLatestArticles(topic)
        dispatch(ArticleActions.setList(response))
    }
}

export const fetchArticleById = (articleSlug: string): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        if (!articleSlug || articleSlug.length === 0) {
            return
        }

        const response: StrapiModel<BlogArticleData> = await ArticleService.getArticleById(articleSlug)
        dispatch(ArticleActions.setCurrentArticle(response))
    }
}