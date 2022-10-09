import { configureStore } from '@reduxjs/toolkit'
import { ArticleApiSlice } from './api/article.api'

const Store = configureStore({
    reducer: {
        [ArticleApiSlice.reducerPath]: ArticleApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ArticleApiSlice.middleware)
    },
    preloadedState: import.meta.env.SSR ? {} : (window as any).__PRELOADED_STATE__
})

if (!import.meta.env.SSR) {
    delete (window as any).__PRELOADED_STATE__
}

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store