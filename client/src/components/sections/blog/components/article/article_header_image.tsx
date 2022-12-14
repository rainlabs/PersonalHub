import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogTopic } from '../../../../../types/blog_topic.enum';
import { LocationData } from '../../../../../types/location_data';
import { StrapiImagePreview } from '../../../../../types/strapi_image_preview';
import uriUtils from '../../../../../utils/uri.utils';
import AppNavLink from '../../../../_app_nav_link';
import CityTag from '../city_tag';
import BlogTopicTag from '../topic_tag';

type Props = {
    title: string,
    topic: BlogTopic,
    imageData: StrapiImagePreview,
    location?: LocationData
}

const BlogArticleHeaderImage: FC<Props> = ({ title, topic, imageData, location }) => {
    function getImageUrl() {
        if (imageData) {
            return uriUtils.getURL(imageData.media.data.attributes.formats.large.url)
        }

        return '/preview.jpg'
    }

    return (
        <div className="w-full m-0 p-0 bg-cover bg-center relative">
            <Helmet>
                <meta property="og:image" content={ getImageUrl() } />
                <meta property="vk:image" content={ getImageUrl() } />
            </Helmet>
            <figure id='image-preview' className='w-full object-cover blog-hero-slider'><img className='object-cover object-center w-full h-full' src={getImageUrl()} /></figure>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-30"></div>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full max-w-4xl mx-auto text-center break-normal flex items-center">
                <div className='mx-auto'>
                    <h1 className="text-white dark:text-slate-200 text-3xl md:text-5xl">
                        { title }
                    </h1>
                    <div className='flex flex-col mt-3'>
                        {
                            location &&
                            <CityTag className='mx-auto text-gray-300'>
                                { location.displayName }
                            </CityTag>
                        }
                        <BlogTopicTag topic={topic} className='mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogArticleHeaderImage;