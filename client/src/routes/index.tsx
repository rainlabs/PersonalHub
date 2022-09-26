import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogRouter from './blog';

import LoadingPage from '../components/pages/loading.page';
const HomePage = React.lazy(() => import('../components/sections/home/pages/index.page'));
const BlogPage = React.lazy(() => import('../components/sections/blog/pages/index.page'));
const NotFoundPage = React.lazy(() => import('../components/pages/not_found.page'));

const MainRouter: FC = () => {
    return (
        <React.Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />

                    <Route path='/blog'>
                        <Route index element={<BlogPage />} />
                    </Route>
                </Route>

                <Route path='/not_found' element={<NotFoundPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </React.Suspense>
    );
}

export default MainRouter;