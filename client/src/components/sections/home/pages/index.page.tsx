import React, { FC } from 'react';
import AppNavLink from '../../../_app_nav_link';
import '../../../../styles/home.page.scss'

const HomePage: FC = () => {
    return (
        <main className='home-page'>
            <div className='grid content-between h-screen px-4 pb-2 font-semibold leading-6 text-l text-gray-100 transition ease-in-out duration-150 mx-auto max-w-screen-lg'>
                <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between py-6">
                    <AppNavLink to='/' className='text-white'>
                        <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent text-gray-100">
                            Владимир Зяблицкий
                        </div>
                    </AppNavLink>
                    <nav>
                        <ul className="flex gap-x-3 font-medium text-gray-500">
                            <li className="hover:text-white">
                                <AppNavLink to='/about'>
                                    Обо мне
                                </AppNavLink>
                            </li>
                            <li className="hover:text-white">
                                <a href="https://github.com/rainlabs">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="grid justify-items-center">
                    <div className='mb-4 text-lg'>
                        Разделы
                    </div>
                    <div className='text-center flex flex-col gap-x-8 gap-y-3 sm:flex-row sm:items-center'>
                        <AppNavLink to='/blog' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                            <div className='inline-block align-middle'>
                            </div>
                            <div className='inline-block align-middle'>
                                Blog
                            </div>
                        </AppNavLink>
                        <AppNavLink to='/blog' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                            <div className='inline-block align-middle'>
                            </div>
                            <div className='inline-block align-middle'>
                                Blog
                            </div>
                        </AppNavLink>
                    </div>
                </div>
                <div></div>
            </div>
        </main>
    )
}

export default HomePage;