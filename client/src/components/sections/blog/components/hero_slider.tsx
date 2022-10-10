import React, { FC } from 'react';
import BlogCarouselItem from './carousel/carousel_item';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy, Autoplay, EffectFade } from "swiper";
import '../../../../styles/swiper.scss'

const BlogHeroSlider: FC = () => {
    return (
        <Swiper effect={"fade"} autoplay={{delay: 5000, disableOnInteraction: false}} id='hero-slider' navigation={true} pagination={true} loop={true} lazy={true} modules={[Navigation, Pagination, Autoplay, EffectFade]} className='carousel slide relative mx-auto'>
            <SwiperSlide>
                <BlogCarouselItem image='/slider/img2.jpg' alt='Наблюдать' />
            </SwiperSlide>
            <SwiperSlide>
                <BlogCarouselItem image='/slider/img1.jpg' alt='Размышлять' />
            </SwiperSlide>
            <SwiperSlide>
                <BlogCarouselItem image='/slider/img3.jpg' alt='Искать свой путь' />
            </SwiperSlide>
        </Swiper>
    )
}

export default BlogHeroSlider;