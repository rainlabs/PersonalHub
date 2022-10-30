import React, { FC } from 'react';

type Props = {
    children: React.ReactNode
}

const BlogElementListItem: FC<Props> = ({ children }) => {
    return (
        <li>{ children }</li>
    )
}

export default BlogElementListItem;