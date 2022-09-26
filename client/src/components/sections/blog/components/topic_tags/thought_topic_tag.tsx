import React, { FC } from 'react';
import ChatIcon from '../../../../icons/chat_icon';

const BlogThoughtTopicTag: FC = () => {
    return (
        <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center md:justify-start">
            <div className='w-4 h-4 mr-2'>
                <ChatIcon />
            </div>
            Мысли
        </div>
    )
}

export default BlogThoughtTopicTag;