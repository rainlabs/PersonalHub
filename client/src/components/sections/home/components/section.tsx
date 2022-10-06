import React, { FC } from 'react';
import AppNavLink from '../../../_app_nav_link';

type Props = {
    to: string,
    label: string,
    className?: string
}

const HomeSection: FC<Props> = ({ to, label, className }) => {
    return (
        <div className="flex flex-wrap mb-6 w-full h-full mx-auto">
            <div className="grow-0 shrink-0 basis-auto w-full px-3 mb-6 md:mb-0 ml-auto">
                <div className={`relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6 w-[90%] h-96 mx-auto ${className || ''}`} data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <div className='absolute flex top-0 right-0 bottom-0 left-0 w-full h-full text-white text-center items-center text-lg'>
                        <div className='m-auto text-5xl uppercase'>{ label }</div>
                    </div>
                    <a href={to}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeSection;