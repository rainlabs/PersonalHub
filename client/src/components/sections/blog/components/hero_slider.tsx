import React, { FC } from 'react';
import BlogCarouselItem from './carousel/carousel_item';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy, Autoplay, EffectFade } from "swiper";
import { Helmet } from 'react-helmet-async';
import { useGetHeroSlidesQuery } from '../redux/api/article.api';
import Loading from '../../../_loading';
import uriUtils from '../../../../utils/uri.utils';
import '../../../../styles/swiper.scss'

const BlogHeroSlider: FC = () => {
    const { data: heroSlides, isLoading, isFetching, isSuccess, isError } = useGetHeroSlidesQuery()

    if (isFetching || !heroSlides) {
        return <Loading className='mx-auto blog-hero-slider' />
    }

    function renderSlides() {

        return heroSlides?.data.map((el) => {
            const imageUrl = uriUtils.getURL(el.attributes.image.media.data.attributes.formats.large.url)
            return (
                <SwiperSlide key={el.id}>
                    <Helmet>
                        <meta property='og:image' content={imageUrl} />
                        <meta property='vk:image' content={imageUrl} />
                    </Helmet>
                    <BlogCarouselItem image={imageUrl} alt={el.attributes.image.alt} />
                </SwiperSlide>
            )
        })
    }

    return (
        <Swiper effect={"fade"} autoplay={{delay: 5000, disableOnInteraction: false}} navigation={true} pagination={{clickable: true}} loop={true} lazy={true} modules={[Navigation, Pagination, Autoplay, EffectFade, Lazy]} className='mx-auto object-cover blog-hero-slider'>
            { renderSlides() }
        </Swiper>
    )
}

export default BlogHeroSlider;