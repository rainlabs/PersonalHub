import React, { FC } from 'react';
import BlogCarouselItem from './carousel/carousel_item';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy, Autoplay, EffectFade } from "swiper";
import { useGetHeroSlidesQuery } from '../redux/api/article.api';
import Loading from '../../../_loading';
import '../../../../styles/swiper.scss'

const BlogHeroSlider: FC = () => {
    const { data: heroSlides, isLoading, isFetching, isSuccess, isError } = useGetHeroSlidesQuery()

    if (isFetching || !heroSlides) {
        return <Loading className='mx-auto blog-hero-slider' />
    }

    function renderSlides() {

        return heroSlides?.data.map((el) => {
            return (
                <SwiperSlide key={el.id}>
                    <BlogCarouselItem image={el.attributes.image.media.data.attributes.formats.large.url} alt={el.attributes.image.alt} />
                </SwiperSlide>
            )
        })
    }

    return (
        <Swiper effect={"fade"} autoplay={{delay: 500000, disableOnInteraction: false}} navigation={true} pagination={{clickable: true}} loop={true} lazy={true} modules={[Navigation, Pagination, Autoplay, EffectFade, Lazy]} className='mx-auto object-cover blog-hero-slider'>
            { renderSlides() }
        </Swiper>
    )
}

export default BlogHeroSlider;