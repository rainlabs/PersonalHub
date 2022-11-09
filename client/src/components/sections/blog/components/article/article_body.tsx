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
import BlogElementsFactory from './elements/factory';
import { StrapiImagePreview } from '../../../../../types/strapi_image_preview';
import e from 'express';

type Props = {
    className?: string,
    publishedAt: string,
    originalDate?: string,
    gallery?: StrapiDataArray<StrapiImage>,
    preview: StrapiImagePreview,
    references?: ExternalReference[],
    children: string
}

const BlogArticleBody: FC<Props> = ({ className, publishedAt, originalDate, gallery, preview, references, children }) => {
    function renderGallery() {
        if (gallery && gallery.data && gallery.data.length > 0) {
            return (
                <BlogGallery>
                    {
                        gallery.data.map((el, idx) => {
                            return <BlogGalleryItem key={idx} thumbnail={el.attributes.formats.small.url} original={el.attributes.url} caption={el.attributes.caption} isPreview={preview.media.data.id === el.id} />
                        })
                    }
                </BlogGallery>
            )
        }
    }

    return (
        <article className={`${className || ''} dark:text-slate-300`}>
            <BlogPublishedBlock id='published-date' className='text-right mb-0'>
                { publishedAt }
            </BlogPublishedBlock>
            {
                originalDate &&
                <BlogPublishedBlock id='original-date' className='text-right mb-0' label='Архив'>
                    { originalDate }
                </BlogPublishedBlock>
            }
            <BlogElementsFactory>{ children }</BlogElementsFactory>
            { renderGallery() }
            <BlogArticleReferences references={references || []} />
            <div id='article-footer' className='hidden'></div>
        </article>
    )
}

export default BlogArticleBody;