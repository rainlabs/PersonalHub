import React, { FC } from 'react';
import BlogNavigation from './navigation';

const BlogHeader: FC = () => {
    return (
        <header className='blog-header'>
            <div className='flex'>
                <div className='text-center mx-auto'>
                    <div className='text-gray-800 pt-24 pb-10 px-6'>
                        <h1 className='blog-title font-pacifico text-6xl'>
                            <span className='hidden md:inline'>Владимир</span><span className='visible md:hidden'>В.</span> Зяблицкий
                        </h1>
                        <p className='blog-description text-gray-600 text-right mt-4 uppercase text-xs'>
                            Личный блог
                        </p>
                    </div>
                    <BlogNavigation />
                </div>
            </div>
        </header>
    )
}

export default BlogHeader;