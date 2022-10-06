import React, { FC, useEffect, useRef } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import { useArticlesList } from '../hooks/article.hooks';
import BlogArticlePreview from './article_preview';
import TopicName from './topic_name';

type Props = {
    topic?: BlogTopic
}

const BlogArticles: FC<Props> = ({ topic }) => {
    const ref = useRef<HTMLDivElement>(null);
    const articlesList = useArticlesList(topic)

    useEffect(() => {
        if (topic && articlesList.length > 0) {
            ref.current?.scrollIntoView({behavior: 'smooth'});
        }
    }, [topic, articlesList])

    function renderPreviews() {
        return articlesList.map((el, i) => <BlogArticlePreview key={i} id={el.id} data={el.attributes} />)
    }

    return (
        <div ref={ref} className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-gray-800 text-center md:text-left">
                <h2 className="text-3xl mb-12 text-center font-normal">
                    {
                        topic ? <TopicName topic={topic} /> : <>Последние записи</>
                    }
                </h2>
                { renderPreviews() }
            </section>
        </div>
    )
}

export default BlogArticles;