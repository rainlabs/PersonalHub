import React, { FC } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import AppNavLink from '../../../_app_nav_link';
import TopicName from './topic_name';

type Props = {
    topic: BlogTopic,
    className?: string,
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const BlogNavigationItem: FC<Props> = ({topic, className, children, onClick}) => {
    return (
        <li className='px-5'>
            <AppNavLink to={`/blog/topic/${topic}`} className={`text-gray-600 ${className || ''} group relative`} onClick={onClick}>
                <div className='w-7 h-7 align-top absolute -left-8 hidden group-hover:inline-block lg:w-4 lg:h-4 lg:-left-5'>
                    { children }
                </div>
                <TopicName topic={topic} />
            </AppNavLink>
        </li>
    )
}

export default BlogNavigationItem;