import React, { FC } from 'react';
import { BlogArticleData } from '../../../../types/blog_article_data';
import uriUtils from '../../../../utils/uri.utils';
import AppNavLink from '../../../_app_nav_link';
import CityTag from './city_tag';
import BlogPublishedBlock from './published_block';
import BlogTopicTag from './topic_tag';
import BlogArticleViewCount from './view_count';

type Props = {
    data: BlogArticleData
}

const BlogArticlePreview: FC<Props> = ({data}) => {
    function getImageUrl() {
        if (data.imagePreview.media) {
            return uriUtils.getURL(data.imagePreview.media.data.attributes.formats.thumbnail.url)
        }

        return '/preview.jpg'
    }

    return (
        <div className="flex flex-wrap mb-6">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img src={ getImageUrl() } className="w-full" alt={data.imagePreview.alt} />
                    {
                        !data.publishedAt &&
                        <div className='absolute flex top-0 right-0 bottom-0 left-0 w-full h-full text-white text-center items-center text-lg'>
                            <div className='m-auto'>DRAFT</div>
                        </div>
                    }
                    <BlogArticleViewCount>
                        { `${data.viewCount || 0}` }
                    </BlogArticleViewCount>
                    <AppNavLink to={`/blog/article/${data.slug}`}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                    </AppNavLink>
                </div>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto relative">
                <div className='flex'>
                    <AppNavLink to={`/blog/article/${data.slug}`} className='hover:text-gray-500 dark:text-slate-200 dark:hover:dark:text-slate-300 mx-auto lg:mr-auto lg:ml-0'>
                        <h5 className="text-lg font-bold mb-3">{ data.title }</h5>
                    </AppNavLink>
                </div>
                {
                    data.location &&
                    <CityTag>
                        { data.location.displayName }
                    </CityTag>
                }
                <BlogTopicTag topic={data.topic} />
                <BlogPublishedBlock>
                    { data.publishedAt }
                </BlogPublishedBlock>
                <p className="text-gray-500 dark:text-slate-400">
                    { data.description }
                </p>
            </div>
        </div>
    )
}

export default BlogArticlePreview;