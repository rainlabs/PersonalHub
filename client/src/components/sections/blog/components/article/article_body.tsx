import React, { FC } from 'react';
import { BlogTopic } from '../../../../../types/blog_topic.enum';
import { StrapiImage } from '../../../../../types/strapi.image';
import AppNavLink from '../../../../_app_nav_link';
import BlogGallery from '../gallery/gallery';
import BlogPublishedBlock from '../published_block';
import BlogGalleryItem from '../gallery/gallery_item';
import { StrapiModel } from '../../../../../types/strapi.model';
import BlogArticleReferences from './article_references';
import { ExternalReference } from '../../../../../types/external_reference';

type Props = {
    className?: string,
    publishedAt: string,
    originalDate?: string,
    gallery?: {
        data: StrapiModel<StrapiImage>[]
    },
    references?: ExternalReference[],
    children: string
}

const BlogArticleBody: FC<Props> = ({ className, publishedAt, originalDate, gallery, references, children }) => {
    function renderGallery() {
        if (gallery && gallery.data.length > 0) {
            return (
                <BlogGallery>
                    {
                        gallery.data.map((el, idx) => {
                            return <BlogGalleryItem key={idx} thumbnail={el.attributes.formats.thumbnail.url} original={el.attributes.url} caption={el.attributes.caption} />
                        })
                    }
                </BlogGallery>
            )
        }
    }

    return (
        <div className={`${className || ''}`}>
            <BlogPublishedBlock className='text-right mb-0'>
                { publishedAt }
            </BlogPublishedBlock>
            {
                originalDate &&
                <BlogPublishedBlock className='text-right mb-0' label='Архив'>
                    { originalDate }
                </BlogPublishedBlock>
            }
            <div className='mt-4' dangerouslySetInnerHTML={{__html: children}}></div>
            { renderGallery() }
            <BlogArticleReferences references={references || []} />
        </div>
    )
}

export default BlogArticleBody;