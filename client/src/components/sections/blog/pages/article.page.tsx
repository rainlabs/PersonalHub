import React, { FC } from 'react';
import BlogHeader from '../components/header';
import { useParams } from 'react-router-dom';
import BlogArticleHeaderImage from '../components/article/article_header_image';
import { useArticle } from '../hooks/article.hooks';
import BlogArticleBody from '../components/article/article_body';
import BlogNavigation from '../components/navigation';
import { Helmet } from 'react-helmet-async';

type ArticleParams = {
    articleSlug: string
}

const BlogArticlePage: FC = () => {
    const { articleSlug } = useParams<ArticleParams>()
    const article = useArticle(articleSlug || '')

    if (article === null || article.attributes.slug !== articleSlug) {
        return <div></div>
    }

    return (
        <div className='relative'>
            <BlogHeader />
            <BlogNavigation />
            <Helmet>
                <title>{ article.attributes.title }</title>
                <meta name="description" content={ article.attributes.seo?.metaDescription } />
                <meta name="keywords" content={ article.attributes.seo?.keywords } />
            </Helmet>
            <BlogArticleHeaderImage imageData={article.attributes.imagePreview} title={article.attributes.title} topic={article.attributes.topic} location={article.attributes.location} />
            <BlogArticleBody className='relative container px-8 py-6 lg:px-24 lg:py-12 max-w-6xl lg:max-w-7xl mx-auto mt-4 lg:-mt-16 bg-white lg:shadow-lg lg:rounded-lg mb-12'
                publishedAt={article.attributes.publishedAt}
                originalDate={article.attributes.originalDate}
                gallery={article.attributes.gallery}
                references={article.attributes.references}
                >
                { article.attributes.body || '' }
            </BlogArticleBody>
        </div>
    )
}

export default BlogArticlePage;