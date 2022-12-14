import React, { FC } from 'react';
import uriUtils from '../../../../../utils/uri.utils';

export type CarouselItemProps = {
    image: string,
    alt?: string,
    children?: React.ReactNode
}

const BlogCarouselItem: FC<CarouselItemProps> = ({ image, alt, children }) => {
    return (
        <div className='w-full h-full object-center relative'>
            <img data-src={ uriUtils.getURL(image) } className="swiper-lazy block w-full object-cover h-full" />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-30"></div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            { children }
        </div>
    )
}

export default BlogCarouselItem;