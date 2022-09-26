import React, { FC } from 'react';
import BlogHeader from '../components/header';
import '../../../../styles/blog.page.scss'
import BlogHeroSlider from '../components/hero_slider';
import BlogAvatar from '../components/avatar';
import BlogPosts from '../components/posts';

const BlogIndexPage: FC = () => {
    return (
        <main className='blog-page font-montserrat'>
            <div className='blog-container mx-11 mt-5'>
                <BlogHeader />
                <BlogHeroSlider />
                <BlogAvatar />
                <BlogPosts />
            </div>
        </main>
    )
}

export default BlogIndexPage;