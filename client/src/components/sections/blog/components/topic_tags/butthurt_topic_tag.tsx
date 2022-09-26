import React, { FC } from 'react';
import EmojiAngryIcon from '../../../../icons/emoji_angry';

const BlogButthurtTopicTag: FC = () => {
    return (
        <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">
            <div className='w-4 h-4 mr-2'>
                <EmojiAngryIcon />
            </div>
            Бомбеж
        </div>
    )
}

export default BlogButthurtTopicTag;