import React, { FC } from 'react';
import { BlogArticleData } from '../../../../types/blog_article_data';
import uriUtils from '../../../../utils/uri.utils';
import AppNavLink from '../../../_app_nav_link';
import BlogPublishedBlock from './published_block';
import BlogTopicTag from './topic_tag';

type Props = {
    id: number,
    data: BlogArticleData
}

const BlogArticlePreview: FC<Props> = ({id, data}) => {
    return (
        <div className="flex flex-wrap mb-6">
            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img src={ uriUtils.getURL(data.imagePreview.data.attributes.formats.small.url) } className="w-full" alt='preview' title='preview' />
                    {/* <div className='absolute flex top-0 right-0 bottom-0 left-0 w-full h-full text-white text-center items-center text-lg'>
                        <div className='m-auto'>DRAFT</div>
                    </div> */}
                    <AppNavLink to={`/blog/article/${id}`}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                    </AppNavLink>
                </div>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                <div className='flex'>
                    <AppNavLink to={`/blog/article/${id}`} className='hover:text-gray-500 mr-auto'>
                        <h5 className="text-lg font-bold mb-3">{ data.title }</h5>
                    </AppNavLink>
                </div>
                <BlogTopicTag topic={data.topic} />
                <BlogPublishedBlock>
                    { data.publishedAt }
                </BlogPublishedBlock>
                <p className="text-gray-500">
                    { data.description }
                </p>
            </div>
        </div>
    )
}

export default BlogArticlePreview;