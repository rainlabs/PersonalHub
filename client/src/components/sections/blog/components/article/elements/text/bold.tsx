import React, { FC } from 'react';

type Props = {
    children: string
}

const BlogElementTextBold: FC<Props> = ({ children }) => {
    return (
        <b>{ children }</b>
    )
}

export default BlogElementTextBold;