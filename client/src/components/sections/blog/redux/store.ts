import { configureStore } from '@reduxjs/toolkit'
import ArticleSlice from './slices/article.slice'

const Store = configureStore({
    reducer: {
        articles: ArticleSlice.reducer
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store