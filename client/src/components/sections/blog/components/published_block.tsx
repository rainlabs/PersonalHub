import React, { FC } from 'react';
import DateUtils from '../../../../utils/date.utils';

type Props = {
    label?: string,
    id?: string,
    className?: string,
    children: string
}

const BlogPublishedBlock: FC<Props> = ({ label, id, className, children }) => {
    const defaultLabel = 'Опубликовано'
    return (
        <p className={`text-gray-500 dark:text-slate-400 mb-6 ${className || ''} ${id || ''}`}>
            <small>
                { label || defaultLabel } <u><time id={id || ''} dateTime={new Date(children).toISOString()}>{ children ? DateUtils.extractDate(children) : 'N/A' }</time></u>
            </small>
        </p>
    )
}

export default BlogPublishedBlock;