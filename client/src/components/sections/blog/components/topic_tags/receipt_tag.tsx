import React, { FC } from 'react';
import ReceiptIcon from '../../../../icons/receipt_icon';

type Props = {
    className?: string
}

const BlogReceiptTopicTag: FC<Props> = ({ className }) => {
    return (
        <div className={`mb-3 text-yellow-600 font-medium text-sm flex items-center justify-center lg:justify-start ${className}`}>
            <div className='w-4 h-4 mr-2'>
                <ReceiptIcon />
            </div>
            Прогулки
        </div>
    )
}

export default BlogReceiptTopicTag;