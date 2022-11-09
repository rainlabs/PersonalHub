import React, { FC } from 'react';
import uriUtils from '../../../../../utils/uri.utils';

export type ArticleGalleryItemProps = {
    className?: string,
    caption: string,
    thumbnail: string,
    original: string,
    isPreview?: boolean
}

const BlogGalleryItem: FC<ArticleGalleryItemProps> = ({ className, caption, thumbnail, original, isPreview }) => {
    return (
        <div className={`gallery-item flex flex-wrap lg:w-1/3 ${className || ''}`} data-src={uriUtils.getURL(original)} data-sub-html={caption}>
            <div className="w-full m-1 md:m-2 cursor-pointer">
                <img alt={caption} className={`block object-cover object-center w-full h-full rounded-lg transition ease-in-out duration-300 shadow-none hover:shadow-lg hover:scale-105 ${isPreview ? 'tg-hidden' : ''}`}
                    src={ uriUtils.getURL(thumbnail) } />
            </div>
        </div>
    )
}

export default BlogGalleryItem;