import React, { FC } from 'react';
import BlogHeader from '../components/header';
import BlogHeroSlider from '../components/hero_slider';
import BlogAvatar from '../components/avatar';
import BlogArticles from '../components/articles';

const BlogIndexPage: FC = () => {
    return (
        <>
            <BlogHeader />
            <BlogHeroSlider />
            <BlogAvatar />
            <BlogArticles />
        </>
    )
}

export default BlogIndexPage;