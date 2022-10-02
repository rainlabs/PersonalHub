import React, { FC } from 'react';
import { BlogTopic } from '../../../../../types/blog_topic.enum';
import { StrapiImage } from '../../../../../types/strapi.image';
import AppNavLink from '../../../../_app_nav_link';
import BlogTopicTag from '../topic_tag';

type Props = {
    title: string,
    topic: BlogTopic,
    image: StrapiImage
}

const BlogArticleHeaderImage: FC<Props> = ({ title, topic, image }) => {
    return (
        <div className='mt-7'>
            <div className="w-full m-0 p-0 bg-cover bg-center relative" style={{backgroundImage: `url('${import.meta.env.VITE_BACKEND_URI}${image.formats.large.url}')`, height: '60vh', maxHeight: '460px'}}>
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-30"></div>
			    <div className="relative container max-w-4xl mx-auto pt-40 md:pt-24 text-center break-normal">
					<p className="text-white text-3xl md:text-5xl">
						{ title }
					</p>
                    <div className='flex mt-3'>
					    <BlogTopicTag topic={topic} className='mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogArticleHeaderImage;