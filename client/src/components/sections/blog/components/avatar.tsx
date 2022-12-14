import React, { FC } from 'react';
import TelegramIcon from '../../../icons/telegram_icon';
import VkIcon from '../../../icons/vk_icon';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from "swiper";
// import '../../../../styles/swiper.scss'

const BlogAvatar: FC = () => {
    return (
        <div className='container px-4 lg:px-0 max-w-6xl mx-auto w-3/4 lg:h-0'>
            <div className="mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0 max-w blog-avatar relative bottom-20 lg:bottom-28 z-10">
                <div className=''>
                    {/* <Swiper effect={"fade"} autoplay={{delay: 5000, disableOnInteraction: false}} loop={true} modules={[Autoplay, EffectFade]} className='mx-auto object-cover'>
                        <SwiperSlide>
                            <img src="/blog_avatar.jpg" className="h-auto rounded-full border-2 border-white dark:border-slate-900" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/blog_avatar_alt.jpg" className="h-auto rounded-full border-2 border-white dark:border-slate-900" alt="" />
                        </SwiperSlide>
                    </Swiper> */}
                    <img src="/blog_avatar.jpg" className="h-auto rounded-full border-2 border-white dark:border-slate-900" alt="" />
                    <p className='text-center font-pacifico mt-4 text-xl dark:text-slate-200'>Соц. сети</p>
                    <div className='flex flex-row justify-center space-x-4 mx-auto mt-2'>
                        <a href={import.meta.env.VITE_VK_LINK} target='_blank' className='w-8 text-blue-500 opacity-100 hover:opacity-80'>
                            <VkIcon />
                        </a>
                        <a href={import.meta.env.VITE_TELEGRAM_LINK} target='_blank' className='w-8 text-blue-400 opacity-100 hover:opacity-80'>
                            <TelegramIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogAvatar;