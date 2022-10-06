import React, { FC } from 'react';
import LocationIcon from '../../../icons/location_icon';

type Props = {
    className?: string,
    children: string
}

const CityTag: FC<Props> = ({ className, children }) => {
    return (
        <div className={`flex text-gray-500 font-medium text-sm items-center justify-center md:justify-start mb-3 ${className || ''}`}>
            <div className='w-4 h-4 mr-2'>
                <LocationIcon />
            </div>
            <span>
                { children }
            </span>
        </div>
    )
}

export default CityTag;