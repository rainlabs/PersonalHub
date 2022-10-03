import React, { FC } from 'react';

type Props = {
    to: string,
    target?: '_self' | '_parent' | '_blank' | '_top',
    className?: string,
    children?: React.ReactNode
}

const ExternalLink: FC<Props> = ({to, target, className, children}) => {
    return (
        <a href={to} className={`text-gray-600 hover:text-gray-400 ${className || ''}`} target={target || '_self'}>
            { children }
        </a>
    )
}

export default ExternalLink;