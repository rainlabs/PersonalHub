import React, { FC } from 'react';
import uriUtils from '../../../../../utils/uri.utils';

export type CarouselItemProps = {
    children: string
}

const BlogCarouselItemCaption: FC<CarouselItemProps> = ({ children }) => {
    return (
        <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">{ children }</h5>
        </div>
    )
}

export default BlogCarouselItemCaption;