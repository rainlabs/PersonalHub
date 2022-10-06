import React, { FC } from 'react';
import BlogArticles from '../components/articles';
import { useParams } from 'react-router-dom';
import { BlogTopic } from '../../../../types/blog_topic.enum';

type TopicParams = {
    topic: BlogTopic
}

const BlogArticlesPage: FC = () => {
    const { topic } = useParams<TopicParams>()

    return (
        <>
            <BlogArticles topic={topic} />
        </>
    )
}

export default BlogArticlesPage;