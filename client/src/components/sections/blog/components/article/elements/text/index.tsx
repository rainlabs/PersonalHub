import React, { FC } from 'react';

type Props = {
    children: string
}

const BlogElementText: FC<Props> = ({ children }) => {
    return (
        <>{ children }</>
    )
}

export default BlogElementText;