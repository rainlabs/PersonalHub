import React, { FC } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import { useArticlesList } from '../hooks/article.hooks';
import BlogArticlePreview from './article_preview';

type Props = {
    topic?: BlogTopic
}

const BlogArticles: FC<Props> = ({ topic }) => {
    const articlesList = useArticlesList(topic)

    function renderPreviews() {
        return articlesList.map((el, i) => <BlogArticlePreview key={i} id={el.id} data={el.attributes} />)
    }

    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-gray-800 text-center md:text-left">
                <h2 className="text-3xl mb-12 text-center font-normal">Последние записи</h2>
                { renderPreviews() }
            </section>
        </div>
    )
}

export default BlogArticles;