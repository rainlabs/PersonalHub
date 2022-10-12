import React, { FC } from 'react';
import EyeIcon from '../../../icons/eye_icon';

type Props = {
    className?: string,
    children: string
}

const BlogArticleViewCount: FC<Props> = ({ className, children }) => {
    return (
        <div className={`flex text-white dark:text-slate-200 font-medium text-sm items-center justify-center md:justify-start absolute left-0 bottom-0 mb-2 ml-2 ${className}`}>
            <div className='w-4 h-4 mr-2'>
                <EyeIcon />
            </div>
            <span>
                { children }
            </span>
        </div>
    )
}

export default BlogArticleViewCount;