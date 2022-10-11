import React, { FC } from 'react';

type Props = {
    label: string,
    to: string
}

const BlogSwiperSlideCaption: FC<Props> = ({ label, to }) => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 h-full w-full items-center hidden invisible lg:visible lg:flex'>
            <div className='flex flex-col mx-auto text-white text-center'>
                <h4 className="font-semibold text-4xl mb-4">
                    { label }
                </h4>
                <a
                    className="block mx-auto px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    href={ to }
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light">
                    Перейти
                </a>
            </div>
        </div>
    )
}

export default BlogSwiperSlideCaption;