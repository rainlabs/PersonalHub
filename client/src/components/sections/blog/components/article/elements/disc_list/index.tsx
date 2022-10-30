import React, { FC } from 'react';

type Props = {
    children: React.ReactNode
}

const BlogElementDiscList: FC<Props> = ({ children }) => {
    return (
        <ul className="list-disc list-inside mb-2 indent-6">
            { children }
        </ul>
    )
}

export default BlogElementDiscList;