import React, { FC } from 'react';
import AppNavLink from '../../../_app_nav_link';

const BlogNavigation: FC = () => {
    return (
        <nav className='w-full flex'>
            <ul className='flex flex-none items-center uppercase font-bold text-xs mx-auto'>
                <li className='px-5'>
                    <AppNavLink to='/blog/topics' className='text-gray-600 hover:text-gray-400'>Прогулки</AppNavLink>
                </li>
                <li className='px-5'>
                    <AppNavLink to='/blog/topics' className='text-gray-600 hover:text-gray-400'>Мысли</AppNavLink>
                </li>
                <li className='px-5'>
                    <AppNavLink to='/blog/topics' className='text-gray-600 hover:text-gray-400'>Бомбеж</AppNavLink>
                </li>
            </ul>
        </nav>
    )
}

export default BlogNavigation;