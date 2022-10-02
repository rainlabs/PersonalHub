import React, { FC } from 'react';
import AppNavLink from '../../../_app_nav_link';
import BlogNavigation from './navigation';

const BlogHeader: FC = () => {
    return (
        <header className='blog-header'>
            <div className='flex'>
                <div className='text-center mx-auto'>
                    <div className='text-gray-800 pt-24 pb-12 px-6'>
                        <h1 className='blog-title font-pacifico text-6xl'>
                            <AppNavLink to='/blog' className='text-gray-800 hover:text-gray-700'>
                                <span className='hidden md:inline'>Владимир</span><span className='visible md:hidden'>В.</span> Зяблицкий
                            </AppNavLink>
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