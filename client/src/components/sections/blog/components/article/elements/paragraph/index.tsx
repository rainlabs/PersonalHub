import React, { FC } from 'react';

type Props = {
    style?: 'normal' | 'ending',
    children: React.ReactNode
}

const styles = {
    normal: 'text-justify indent-6',
    ending: 'text-center mt-8'
}

const BlogElementParagraph: FC<Props> = ({ style, children }) => {
    return (
        <p className={`mb-2 ${styles[style || 'normal']}`}>
            { children }
        </p>
    )
}

export default BlogElementParagraph;