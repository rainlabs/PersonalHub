import React, { FC, useEffect, useRef } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import Loading from '../../../_loading';
import { useGetArticlesQuery } from '../redux/api/article.api';
import BlogArticlePreview from './article_preview';
import TopicName from './topic_name';

type Props = {
    topic?: BlogTopic
}

const BlogArticles: FC<Props> = ({ topic }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { data: articles, isLoading, isFetching, isSuccess, isError } = useGetArticlesQuery(topic)

    useEffect(() => {
        if (topic) {
            if (isSuccess && articles?.data) {
                ref.current?.scrollIntoView({behavior: 'smooth'});
            }
        } else if (!import.meta.env.SSR) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [topic, articles, isSuccess])

    function renderPreviews() {
        if (isFetching || !articles) {
            return <Loading />
        }

        return articles.data.map((el, i) => <BlogArticlePreview key={el.id} data={el.attributes} />)
    }

    return (
        <div ref={ref} className="container my-12 lg:my-24 px-6 mx-auto">
            <section className="mb-32 text-gray-800 dark:text-slate-200 text-center lg:text-left">
                <h2 className="text-3xl mb-12 lg:mb-24 text-center font-normal">
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