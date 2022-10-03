import React, { FC } from 'react';
import BlogHeader from '../components/header';
import BlogHeroSlider from '../components/hero_slider';
import BlogAvatar from '../components/avatar';
import BlogArticles from '../components/articles';
import { useParams } from 'react-router-dom';
import BlogArticleHeaderImage from '../components/article/article_header_image';
import { useArticle } from '../hooks/article.hooks';
import BlogArticleBody from '../components/article/article_body';

type ArticleParams = {
    articleId: string
}

const BlogArticlePage: FC = () => {
    const { articleId } = useParams<ArticleParams>()
    const article = useArticle(Number(articleId))

    if (article === null) {
        return <div></div>
    }

    return (
        <div className='relative'>
            <BlogHeader />
            <BlogArticleHeaderImage image={article.attributes.imagePreview.data.attributes} title={article.attributes.title} topic={article.attributes.topic} />
            <BlogArticleBody className='relative container px-6 py-8 max-w-6xl lg:max-w-7xl mx-auto mt-4 lg:-mt-16 bg-white shadow-lg rounded-lg mb-12'
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