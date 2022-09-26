import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const BlogPage = React.lazy(() => import('../components/sections/blog/pages/index.page'));

type Props = {
    basePath: string
}

const BlogRouter: FC<Props> = ({basePath}) => {
    return (
        <Routes>
            <Route path={basePath}>
                <Route index element={<BlogPage />} />
            </Route>
        </Routes>
    );
}

export default BlogRouter;