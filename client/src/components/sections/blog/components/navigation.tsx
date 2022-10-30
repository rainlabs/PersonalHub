import React, { FC, useEffect, useState } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import CameraIcon from '../../../icons/camera_icon';
import ChatIcon from '../../../icons/chat_icon';
import EmojiAngryIcon from '../../../icons/emoji_angry';
import KeyboardIcon from '../../../icons/keyboard_icon';
import TeaIcon from '../../../icons/tea_icon';
import AppNavLink from '../../../_app_nav_link';
import TopicName from './topic_name';
import BlogNavigationItem from './navigation_item';
import HomeIcon from '../../../icons/home_icon';
import '../../../../styles/navigation.scss'
import ColorModeToggle from '../../../_color_mode_toggle';

const BlogNavigation: FC = () => {
    const [open, setOpen] = useState(false)
    const overlayClass = "fixed flex top-0 left-0 px-10 pb-32 pt-12 z-20 h-screen w-full \
                            bg-gray-100 dark:bg-slate-800 transform delay-100 transition-all lg:transition-none duration-300 \
                            lg:translate-x-0 lg:items-center lg:mx-auto lg:opacity-90 lg:static lg:bg-white lg:dark:bg-slate-900 lg:h-auto lg:w-auto lg:p-5 lg:mb-2"

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        setOpen(false)
    }

    return (
        <div className='w-full lg:sticky lg:top-0 lg:z-20'>
            <button type='button' aria-label='Hamburger Navigation' className="lg:hidden flex top-5 left-0 z-30 fixed w-10 h-10 text-white focus:outline-none" onClick={() => setOpen(!open)}>
                <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <span className={`absolute h-0.5 w-5 bg-gray-800 dark:bg-slate-200 transform transition duration-300 ease-in-out ${open ? "rotate-45 delay-200" : "-translate-y-1.5"}`} />
                    <span className={`absolute h-0.5 bg-gray-800 dark:bg-slate-200 transform transition-all duration-200 ease-in-out ${open ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"}`} />
                    <span className={`absolute h-0.5 w-5 bg-gray-800 dark:bg-slate-200 transform transition duration-300 ease-in-out ${open ? "-rotate-45 delay-200" : "translate-y-1.5"}`} />
                </div>
            </button>
            {/* <ul className='flex flex-none items-center uppercase font-bold text-xs mx-auto'> */}
            <nav className={`${overlayClass} ${open ? "opacity-90 translate-x-0" : "opacity-0 -translate-x-full"}`}>
                <ul className='flex flex-col text-2xl space-y-10 lg:space-y-0 lg:flex-row lg:uppercase lg:font-bold lg:text-xs m-auto'>
                    <BlogNavigationItem className='hover:text-pink-600 nav-home' activeClassName='text-pink-600 dark:text-pink-600' onClick={handleClick}>
                        <HomeIcon />
                    </BlogNavigationItem>
                    <BlogNavigationItem className='hover:text-fuchsia-600' activeClassName='text-fuchsia-600 dark:text-fuchsia-600' topic={BlogTopic.WALK} onClick={handleClick}>
                        <CameraIcon />
                    </BlogNavigationItem>
                    <BlogNavigationItem className='hover:text-green-600' activeClassName='text-green-600 dark:text-green-600' topic={BlogTopic.THOUGHT} onClick={handleClick}>
                        <ChatIcon />
                    </BlogNavigationItem>
                    <BlogNavigationItem className='hover:text-red-600' activeClassName='text-red-600 dark:text-red-600' topic={BlogTopic.BUTTHURT} onClick={handleClick}>
                        <EmojiAngryIcon />
                    </BlogNavigationItem>
                    <BlogNavigationItem className='hover:text-blue-600' activeClassName='text-blue-600 dark:text-blue-600' topic={BlogTopic.PROGRAMMING} onClick={handleClick}>
                        <KeyboardIcon />
                    </BlogNavigationItem>
                    <BlogNavigationItem className='hover:text-yellow-600' activeClassName='text-yellow-600 dark:text-yellow-600' topic={BlogTopic.RECEIPT} onClick={handleClick}>
                        <TeaIcon />
                    </BlogNavigationItem>
                </ul>
                <ColorModeToggle className='absolute top-5 lg:top-auto right-3 lg:right-2' />
            </nav>
        </div>
    )
}

export default BlogNavigation;