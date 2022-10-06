import React, { FC, useRef } from 'react';
import BlogHeader from '../components/header';
import BlogHeroSlider from '../components/hero_slider';
import BlogAvatar from '../components/avatar';

type Props = {
    children?: React.ReactNode
}

const BlogArticlesLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <BlogHeader />
            <BlogHeroSlider />
            <BlogAvatar />
            { children }
        </>
    )
}

export default BlogArticlesLayout;