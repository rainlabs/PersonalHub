import React, { FC } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import CameraIcon from '../../../icons/camera_icon';
import ChatIcon from '../../../icons/chat_icon';
import EmojiAngryIcon from '../../../icons/emoji_angry';
import KeyboardIcon from '../../../icons/keyboard_icon';
import ReceiptIcon from '../../../icons/receipt_icon';
import AppNavLink from '../../../_app_nav_link';
import TopicName from './topic_name';

const BlogNavigation: FC = () => {
    return (
        <nav className='w-full flex'>
            <ul className='flex flex-none items-center uppercase font-bold text-xs mx-auto'>
                <li className='px-5'>
                    <AppNavLink to={`/blog/topic/${BlogTopic.WALK}`} className='text-gray-600 hover:text-fuchsia-600 group relative'>
                        <div className='w-4 h-4 align-top absolute -left-5 hidden group-hover:inline-block'>
                            <CameraIcon />
                        </div>
                        <TopicName topic={BlogTopic.WALK} />
                    </AppNavLink>
                </li>
                <li className='px-5'>
                    <AppNavLink to={`/blog/topic/${BlogTopic.THOUGHT}`} className='text-gray-600 hover:text-green-600 group relative'>
                        <div className='w-4 h-4 mr-1 align-top absolute -left-5 hidden group-hover:inline-block'>
                            <ChatIcon />
                        </div>
                        <TopicName topic={BlogTopic.THOUGHT} />
                    </AppNavLink>
                </li>
                <li className='px-5'>
                    <AppNavLink to={`/blog/topic/${BlogTopic.BUTTHURT}`} className='text-gray-600 hover:text-red-600 group relative'>
                        <div className='w-4 h-4 mr-1 align-top absolute -left-5 hidden group-hover:inline-block'>
                            <EmojiAngryIcon />
                        </div>
                        <TopicName topic={BlogTopic.BUTTHURT} />
                    </AppNavLink>
                </li>
                <li className='px-5'>
                    <AppNavLink to={`/blog/topic/${BlogTopic.PROGRAMMING}`} className='text-gray-600 hover:text-blue-600 group relative'>
                        <div className='w-4 h-4 mr-1 align-top absolute -left-5 hidden group-hover:inline-block'>
                            <KeyboardIcon />
                        </div>
                        <TopicName topic={BlogTopic.PROGRAMMING} />
                    </AppNavLink>
                </li>
                <li className='px-5'>
                    <AppNavLink to={`/blog/topic/${BlogTopic.RECEIPT}`} className='text-gray-600 hover:text-yellow-600 group relative'>
                        <div className='w-4 h-4 mr-1 align-top absolute -left-5 hidden group-hover:inline-block'>
                            <ReceiptIcon />
                        </div>
                        <TopicName topic={BlogTopic.RECEIPT} />
                    </AppNavLink>
                </li>
            </ul>
        </nav>
    )
}

export default BlogNavigation;