import React, { FC } from 'react';
import BlogArticles from '../components/articles';
import { useParams } from 'react-router-dom';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import { Helmet } from 'react-helmet-async';
import { TopicTranslations } from '../components/topic_name';

type TopicParams = {
    topic: BlogTopic
}

const BlogArticlesPage: FC = () => {
    const { topic } = useParams<TopicParams>()

    return (
        <>
            <Helmet>
                <title>Владимир Зяблицкий | Личный Блог{ topic ? ` - ${TopicTranslations[topic]}` : '' }</title>
            </Helmet>
            <BlogArticles topic={topic} />
        </>
    )
}

export default BlogArticlesPage;