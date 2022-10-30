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
                <meta property="og:type" content='website' />
                <meta property="og:locale" content='ru_RU' />
                <meta property="og:site_name" content='Владимир Зяблицкий | Личный Блог' />
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