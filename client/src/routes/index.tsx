import React, { FC } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import BlogRouter from './blog';

import LoadingPage from '../components/pages/loading.page';
const HomePage = React.lazy(() => import('../components/sections/home/pages/index.page'));
const BlogArticlesLayout = React.lazy(() => import('../components/sections/blog/pages/articles.layout'));
const BlogArticlesPage = React.lazy(() => import('../components/sections/blog/pages/articles.page'));
const BlogArticlePage = React.lazy(() => import('../components/sections/blog/pages/article.page'));
const BlogLayout = React.lazy(() => import('../components/sections/blog/layout'));
const NotFoundPage = React.lazy(() => import('../components/pages/not_found.page'));
const StrapiLoginPage = React.lazy(() => import('../components/pages/strapi_login.page'));

const MainRouter: FC = () => {
    return (
        <React.Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />

                    <Route path='/blog' element={<BlogLayout><Outlet /></BlogLayout>}>
                        <Route path='/blog' element={<BlogArticlesLayout><Outlet /></BlogArticlesLayout>}>
                            <Route index element={<BlogArticlesPage />} />
                            <Route path='/blog/topic/:topic' element={<BlogArticlesPage />} />
                        </Route>
                        <Route path='/blog/article/:articleSlug' element={<BlogArticlePage />} />
                    </Route>

                    <Route path='/strapi/login' element={<StrapiLoginPage />} />
                </Route>

                <Route path='/not_found' element={<NotFoundPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </React.Suspense>
    );
}

export default MainRouter;