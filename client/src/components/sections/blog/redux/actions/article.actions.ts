import { AnyAction, ThunkAction, createAsyncThunk } from '@reduxjs/toolkit'
import { BlogArticleData } from '../../../../../types/blog_article_data'
import { StrapiModel } from '../../../../../types/strapi.model'
import ArticleService from '../services/article.service'
import ArticleSlice from '../slices/article.slice'
import { RootState } from '../store'

export const ArticleActions = ArticleSlice.actions

export const fetchLatestArticles = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        const response: StrapiModel<BlogArticleData>[] = await ArticleService.getLatestArticles()
        dispatch(ArticleActions.setList(response))
    }
}

export const fetchArticleById = (articleId: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        if (articleId <= 0) {
            return
        }

        const response: StrapiModel<BlogArticleData> = await ArticleService.getArticleById(articleId)
        dispatch(ArticleActions.setCurrentArticle(response))
    }
}