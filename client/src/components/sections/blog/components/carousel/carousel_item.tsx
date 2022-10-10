import React, { FC } from 'react';
import uriUtils from '../../../../../utils/uri.utils';

export type CarouselItemProps = {
    image: string,
    alt?: string,
    active?: boolean,
    className?: string,
    children?: React.ReactNode
}

const BlogCarouselItem: FC<CarouselItemProps> = ({ image, alt, active, className, children }) => {
    return (
        <>
            <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: "50%"}}>
                <img src={ uriUtils.getURL(image) } className="swiper-lazy block w-full" />
                {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-30"></div>
            </div>
            { children }
        </>
    )
}

export default BlogCarouselItem;