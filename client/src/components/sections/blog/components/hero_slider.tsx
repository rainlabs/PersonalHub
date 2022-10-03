import React, { FC } from 'react';
import BlogCarouselContainer from './carousel/carousel_container';
import BlogCarouselItem from './carousel/carousel_item';
import BlogCarouselItemCaption from './carousel/carousel_item_caption';

const BlogHeroSlider: FC = () => {
    return (
        <BlogCarouselContainer carouselId='hero-slider' className='mt-7 mx-auto'>
            <BlogCarouselItem image='/slider/img2.jpg' alt='Наблюдать' active={true}>
                <BlogCarouselItemCaption>Наблюдать</BlogCarouselItemCaption>
            </BlogCarouselItem>
            <BlogCarouselItem image='/slider/img1.jpg' alt='Размышлять'>
                <BlogCarouselItemCaption>Размышлять</BlogCarouselItemCaption>
            </BlogCarouselItem>
            <BlogCarouselItem image='/slider/img3.jpg' alt='Искать свой путь'>
                <BlogCarouselItemCaption>Искать свой путь</BlogCarouselItemCaption>
            </BlogCarouselItem>
        </BlogCarouselContainer>
    )
}

export default BlogHeroSlider;