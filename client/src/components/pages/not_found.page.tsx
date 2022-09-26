import React, { FC } from 'react';
import '../../styles/home.page.css'
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {

    return (
        <main className='home-page grid content-between h-screen px-4 pb-2 font-semibold leading-6 text-l text-gray-100 transition ease-in-out duration-150 mx-auto max-w-screen-lg'>
            <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between py-6">
            </div>
            <div className="grid justify-items-center">
                <div className='mb-4 text-lg'>
                    Страница не найдена
                </div>
                <div className='text-center flex flex-col gap-x-8 gap-y-3 sm:flex-row sm:items-center'>
                    <Link to='/' className='hover:text-white text-gray-500'>
                        Вернуться на главную
                    </Link>
                </div>
            </div>
            <div></div>
        </main>
    )
}

export default NotFoundPage;