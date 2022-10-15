import React, { FC } from 'react';
import BlogCheckListItem, { CheckListItemProps } from './item';

type Props = {
    className?: string,
    list: CheckListItemProps[]
}

const BlogCheckList: FC<Props> = ({ className, list }) => {
    return (
        <div className={`p-4 lg:p-8 my-4 mx-0 md:mx-32 lg:mx-48 space-y-2 bg-slate-50 dark:bg-slate-800 rounded-xl ${className || ''}`}>
            {
                list.map((el, idx) => <BlogCheckListItem key={idx} {...el} />)
            }
        </div>
    )
}

export default BlogCheckList;