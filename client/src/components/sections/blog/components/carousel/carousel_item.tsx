import React, { FC } from 'react';
import uriUtils from '../../../../../utils/uri.utils';

export type CarouselItemProps = {
    image: string,
    alt: string,
    active?: boolean,
    className?: string
}

const BlogCarouselItem: FC<CarouselItemProps> = ({ image, alt, active, className }) => {
    return (
        <div className={`carousel-item ${active ? 'active' : ''} float-left w-full max-w-screen-2xl max-h-screen ${className || ''}`}>
            <img
                src={ uriUtils.getURL(image) }
                className="block w-full h-full"
                alt={ alt }
            />
        </div>
    )
}

export default BlogCarouselItem;