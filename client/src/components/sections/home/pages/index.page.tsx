import React, { FC } from 'react';
import AppNavLink from '../../../_app_nav_link';
import '../../../../styles/home.page.scss'
import HomeHeader from '../components/header';
import HomeSection from '../components/section';

const HomePage: FC = () => {
    return (
        <main className='home-page font-montserrat'>
            <div className='blog-container mx-11 mt-5'>
                <HomeHeader />
                <div className='container flex flex-col md:flex-row mx-auto mt-12'>
                    <HomeSection to='https://vladimir.sibirianit.com' label='Резюме' className='bg-zinc-600' />
                    <HomeSection to='/blog' label='Блог' className='bg-sky-600' />
                </div>
            </div>
        </main>
    )
}

export default HomePage;