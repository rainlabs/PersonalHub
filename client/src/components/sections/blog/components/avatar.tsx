import React, { FC } from 'react';
import TelegramIcon from '../../../icons/telegram_icon';
import VkIcon from '../../../icons/vk_icon';

const BlogAvatar: FC = () => {
    return (
        <div className='container px-4 lg:px-0 max-w-6xl mx-auto w-2/3 lg:h-0'>
            <div className="mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0 blog-avatar lg:relative">
                <div className=''>
                    <img src="/blog_avatar.jpg" className="h-auto rounded-full" alt="" />
                    <p className='text-center font-pacifico mt-4 text-xl'>Паблики</p>
                    <div className='flex flex-row justify-between px-2 mx-8 lg:mx-16 mt-2'>
                        <a href='https://vk.com' className='w-8 text-blue-500 opacity-100 hover:opacity-80'>
                            <VkIcon />
                        </a>
                        <a href='https://telegram.org' className='w-8 text-blue-400 opacity-100 hover:opacity-80'>
                            <TelegramIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogAvatar;