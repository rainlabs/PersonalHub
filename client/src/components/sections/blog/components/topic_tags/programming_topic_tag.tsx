import React, { FC } from 'react';
import KeyboardIcon from '../../../../icons/keyboard_icon';

type Props = {
    className?: string
}

const BlogProgrammingTopicTag: FC<Props> = ({ className }) => {
    return (
        <div className={`mb-3 text-blue-600 font-medium text-sm flex items-center justify-center md:justify-start ${className}`}>
            <div className='w-4 h-4 mr-2'>
                <KeyboardIcon />
            </div>
            Программирование
        </div>
    )
}

export default BlogProgrammingTopicTag;