import React, { FC } from 'react';
import { BlogTopic } from '../../../../../types/blog_topic.enum';
import { StrapiImage } from '../../../../../types/strapi.image';
import AppNavLink from '../../../../_app_nav_link';
import BlogGallery from '../gallery/gallery';
import BlogPublishedBlock from '../published_block';
import BlogGalleryItem from '../gallery/gallery_item';
import BlogArticleReferences from './article_references';
import { ExternalReference } from '../../../../../types/external_reference';
import { StrapiDataArray } from '../../../../../types/strapi.data';

type Props = {
    className?: string,
    description: string,
    publishedAt: string,
    originalDate?: string,
    gallery?: StrapiDataArray<StrapiImage>
    references?: ExternalReference[],
    children: string
}

const BlogArticleBody: FC<Props> = ({ className, description, publishedAt, originalDate, gallery, references, children }) => {
    function renderGallery() {
        if (gallery && gallery.data && gallery.data.length > 0) {
            return (
                <BlogGallery>
                    {
                        gallery.data.map((el, idx) => {
                            return <BlogGalleryItem key={idx} thumbnail={el.attributes.formats.small.url} original={el.attributes.url} caption={el.attributes.caption} />
                        })
                    }
                </BlogGallery>
            )
        }
    }

    return (
        <article data-description={description} className={`${className || ''} dark:text-slate-400`}>
            <BlogPublishedBlock id='published-date' className='text-right mb-0'>
                { publishedAt }
            </BlogPublishedBlock>
            {
                originalDate &&
                <BlogPublishedBlock id='original-date' className='text-right mb-0' label='Архив'>
                    { originalDate }
                </BlogPublishedBlock>
            }
            <div className='indent-12 text-justify'></div>
            <div className='mt-4 article-text' dangerouslySetInnerHTML={{__html: children}}></div>
            { renderGallery() }
            <BlogArticleReferences references={references || []} />
            <div id='article-footer' className='hidden'></div>
        </article>
    )
}

export default BlogArticleBody;