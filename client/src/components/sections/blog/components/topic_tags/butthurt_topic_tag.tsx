import React, { FC } from 'react';
import EmojiAngryIcon from '../../../../icons/emoji_angry';

type Props = {
    className?: string
}

const BlogButthurtTopicTag: FC<Props> = ({ className }) => {
    return (
        <div className={`mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start ${className}`}>
            <div className='w-4 h-4 mr-2'>
                <EmojiAngryIcon />
            </div>
            Бомбеж
        </div>
    )
}

export default BlogButthurtTopicTag;