import React, { FC } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import AppNavLink from '../../../_app_nav_link';
import TopicName from './topic_name';

type Props = {
    topic?: BlogTopic,
    className?: string,
    activeClassName?: string,
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const BlogNavigationItem: FC<Props> = ({topic, className, activeClassName, children, onClick}) => {
    return (
        <li className={`px-5 ${ topic ? '' : 'visible lg:hidden' }`}>
            <AppNavLink to={ topic ? `/blog/topic/${topic}` : '/blog'} className={`text-gray-600 dark:text-slate-400 ${className || ''} group relative`} activeClassName={`nav-active-item ${activeClassName || ''}`} onClick={onClick}>
                <div className='nav-icon w-7 h-7 align-top absolute -left-8 hidden group-hover:inline-block lg:w-4 lg:h-4 lg:-left-5'>
                    { children }
                </div>
                {
                    topic ? <TopicName topic={topic} /> : <>Домой</>
                }
            </AppNavLink>
        </li>
    )
}

export default BlogNavigationItem;