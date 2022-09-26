import React, { FC } from 'react';
import CameraIcon from '../../../../icons/camera_icon';

const BlogWalkTopicTag: FC = () => {
    return (
        <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
            <div className='w-4 h-4 mr-2'>
                <CameraIcon />
            </div>
            Прогулки
        </div>
    )
}

export default BlogWalkTopicTag;