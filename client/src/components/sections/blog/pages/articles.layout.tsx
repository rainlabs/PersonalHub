import React, { FC, useRef } from 'react';
import BlogHeroSlider from '../components/hero_slider';
import BlogAvatar from '../components/avatar';
import { Helmet } from 'react-helmet-async';

type Props = {
    children?: React.ReactNode
}

const BlogArticlesLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>Владимир Зяблицкий | Личный Блог</title>
                <meta name="description" content='Личный блог, фотографии и мысли' />
                <meta name="keywords" content='Прогулки, фото, мысли, программирование, бомбеж' />
            </Helmet>
            <BlogHeroSlider />
            <BlogAvatar />
            <div className='relative bottom-20 lg:static'>
                { children }
            </div>
        </>
    )
}

export default BlogArticlesLayout;