import React, { FC } from 'react';
import uriUtils from '../../../../../utils/uri.utils';
import DownloadIcon from '../../../../icons/download_icon';

export type ArticleGalleryItemProps = {
    className?: string,
    caption: string,
    thumbnail: string,
    original: string
}

const BlogGalleryItem: FC<ArticleGalleryItemProps> = ({ className, caption, thumbnail, original }) => {
    return (
        <div className={`gallery-item flex flex-wrap w-1/3 ${className || ''}`} data-src={uriUtils.getURL(original)} data-sub-html={caption}>
            <div className="w-full m-1 md:m-2 cursor-pointer">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg transition ease-in-out duration-300 shadow-none hover:shadow-lg hover:scale-105"
                    src={ uriUtils.getURL(thumbnail) } />
            </div>
            {/* <div className='flex w-full mb-2'>
                <a className='flex flex-none items-center mx-auto text-blue-600 hover:text-blue-400 lowercase' download="custom-filename.jpg" href={ uriUtils.getURL(original) } title="ImageName">
                    <div className='h-4 w-4 mr-1'>
                        <DownloadIcon />
                    </div>
                    <div>скачать</div>
                </a>
            </div> */}
        </div>
    )
}

export default BlogGalleryItem;