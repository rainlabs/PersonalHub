import React, { FC } from 'react';

type Props = {
    children: React.ReactNode
}

const BlogElementCheckList: FC<Props> = ({ children }) => {
    return (
        <div className='checklist border-2 border-slate-100 dark:border-slate-700 bg-slate-100 dark:bg-slate-700 rounded-lg my-4 mx-0 md:mx-32 lg:mx-48 space-y-0.5'>
            { children }
        </div>
    )
}

export default BlogElementCheckList;