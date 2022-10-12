import React, { FC } from 'react';
import AppNavLink from '../../../_app_nav_link';

const BlogHeader: FC = () => {
    return (
        <header className='blog-header'>
            <div className='flex'>
                <div className='text-center mx-auto'>
                    <div className='text-gray-800 pt-12 lg:pt-24 pb-7'>
                        <p className='blog-title font-pacifico text-5xl md:text-6xl'>
                            <AppNavLink to='/blog' className='text-gray-800 dark:text-slate-100 hover:text-gray-700 dark:hover:text-slate-200'>
                                <span className=''>Владимир</span> Зяблицкий
                            </AppNavLink>
                        </p>
                        <p className='blog-description text-gray-600 dark:text-slate-400 md:text-right mt-4 uppercase text-xs lg:mx-0'>
                            Личный блог
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default BlogHeader;