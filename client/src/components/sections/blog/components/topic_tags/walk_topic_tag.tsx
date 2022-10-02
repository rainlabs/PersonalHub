import React, { FC } from 'react';
import CameraIcon from '../../../../icons/camera_icon';

type Props = {
    className?: string
}

const BlogWalkTopicTag: FC<Props> = ({ className }) => {
    return (
        <div className={`mb-3 text-fuchsia-600 font-medium text-sm flex items-center justify-center md:justify-start ${className}`}>
            <div className='w-4 h-4 mr-2'>
                <CameraIcon />
            </div>
            Прогулки
        </div>
    )
}

export default BlogWalkTopicTag;