import React, { FC, useRef } from 'react';
import BlogHeader from '../components/header';
import BlogHeroSlider from '../components/hero_slider';
import BlogAvatar from '../components/avatar';
import BlogNavigation from '../components/navigation';

type Props = {
    children?: React.ReactNode
}

const BlogArticlesLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <BlogHeader />
            <BlogNavigation />
            <BlogHeroSlider />
            <BlogAvatar />
            { children }
        </>
    )
}

export default BlogArticlesLayout;