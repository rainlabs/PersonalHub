import React, { FC } from 'react';
import BlogHeader from '../components/header';
import { useParams } from 'react-router-dom';
import BlogArticleHeaderImage from '../components/article/article_header_image';
import BlogArticleBody from '../components/article/article_body';
import BlogNavigation from '../components/navigation';
import { Helmet } from 'react-helmet-async';
import { useGetArticleBySlugQuery } from '../redux/api/article.api';

type ArticleParams = {
    articleSlug: string
}

const BlogArticlePage: FC = () => {
    const { articleSlug } = useParams<ArticleParams>()
    const { data: article, isLoading, isFetching, isSuccess, isError } = useGetArticleBySlugQuery(articleSlug || '')

    if (isFetching || !article || article.data.attributes.slug !== articleSlug) {
        return <div></div>
    }

    return (
        <>
            <Helmet>
                <title>{ article.data.attributes.title }</title>
                <meta name="description" content={ article.data.attributes.seo?.metaDescription } />
                <meta name="keywords" content={ article.data.attributes.seo?.keywords } />
            </Helmet>
            <BlogArticleHeaderImage imageData={article.data.attributes.imagePreview} title={article.data.attributes.title} topic={article.data.attributes.topic} location={article.data.attributes.location} />
            <BlogArticleBody className='relative container px-8 py-6 lg:px-24 lg:py-12 max-w-6xl lg:max-w-7xl mx-auto mt-4 lg:-mt-16 bg-white lg:shadow-lg lg:rounded-lg mb-12'
                description={article.data.attributes.description}
                publishedAt={article.data.attributes.publishedAt}
                originalDate={article.data.attributes.originalDate}
                gallery={article.data.attributes.gallery}
                references={article.data.attributes.references}
                >
                { article.data.attributes.body || '' }
            </BlogArticleBody>
        </>
    )
}

export default BlogArticlePage;