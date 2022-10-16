import React, { FC } from 'react';
import BlogCheckListItem, { CheckListItemProps } from './item';

type Props = {
    className?: string,
    list: CheckListItemProps[]
}

const BlogCheckList: FC<Props> = ({ className, list }) => {
    return (
        <div className={`border-2 border-slate-100 dark:border-slate-700 bg-slate-100 dark:bg-slate-700 rounded-lg my-4 mx-0 md:mx-32 lg:mx-48 space-y-0.5 checklist ${className || ''}`}>
            {
                list.map((el, idx) => <BlogCheckListItem key={idx} {...el} />)
            }
        </div>
    )
}

export default BlogCheckList;