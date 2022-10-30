import React, { FC } from 'react';

type Props = {
    children: string
}

const BlogElementEmoji: FC<Props> = ({ children }) => {
    return (
        <span className='emoji'>{ children }</span>
    )
}

export default BlogElementEmoji;