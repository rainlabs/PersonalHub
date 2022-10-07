import React, { FC } from 'react';
import ChatIcon from '../../../../icons/chat_icon';

type Props = {
    className?: string
}

const BlogThoughtTopicTag: FC<Props> = ({ className }) => {
    return (
        <div className={`mb-3 text-green-600 font-medium text-sm flex items-center justify-center lg:justify-start ${className}`}>
            <div className='w-4 h-4 mr-2'>
                <ChatIcon />
            </div>
            Мысли
        </div>
    )
}

export default BlogThoughtTopicTag;