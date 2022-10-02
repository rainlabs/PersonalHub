import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BlogArticleData } from '../../../../../types/blog_article_data';
import { StrapiModel } from '../../../../../types/strapi.model';
import { BlogArticlePayloadModel } from "../models/article.model";

const initialState: BlogArticlePayloadModel = {
    list: [],
    currentArticle: null
}

const ArticleSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {
        setList(state, action: PayloadAction<StrapiModel<BlogArticleData>[]>) {
            state.list = action.payload
        },

        setCurrentArticle(state, action: PayloadAction<StrapiModel<BlogArticleData>>) {
            state.currentArticle = action.payload
        }
    }
})

export default ArticleSlice