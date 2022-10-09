import React, { FC } from 'react';
import DateUtils from '../../../../utils/date.utils';

type Props = {
    label?: string,
    className?: string,
    children: string
}

const BlogPublishedBlock: FC<Props> = ({ label, className, children }) => {
    const defaultLabel = 'Опубликовано'
    return (
        <p className={`text-gray-500 mb-6 ${className}`}>
            <small>
                { label || defaultLabel } <u><time dateTime={new Date(children).toISOString()}>{ children ? DateUtils.extractDate(children) : 'N/A' }</time></u>
            </small>
        </p>
    )
}

export default BlogPublishedBlock;