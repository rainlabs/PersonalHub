import React, { FC } from 'react';
import { BlogArticleData } from '../../../../types/blog_article_data';
import BlogTopicTag from './topic_tag';

const BlogArticlePreview: FC<BlogArticleData> = ({topic, image_preview, title, published_at, description}) => {
    return (
        <div className="flex flex-wrap mb-6">
            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img src={ image_preview } className="w-full" alt='preview' title='preview' />
                    {/* <div className='absolute flex top-0 right-0 bottom-0 left-0 w-full h-full text-white text-center items-center text-lg'>
                        <div className='m-auto'>DRAFT</div>
                    </div> */}
                    <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                    </a>
                </div>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                <h5 className="text-lg font-bold mb-3">{ title }</h5>
                <BlogTopicTag topic={topic} />
                <p className="text-gray-500 mb-6">
                    <small>
                        Опубликовано <u>{ published_at }</u>
                    </small>
                </p>
                <p className="text-gray-500">
                    { description }
                </p>
            </div>
        </div>
    )
}

export default BlogArticlePreview;