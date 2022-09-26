import React, { FC } from 'react';
import { BlogArticleData } from '../../../../types/blog_article_data';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import BlogArticlePreview from './article_preview';

const SampleData: BlogArticleData[] = [
    {
        topic: BlogTopic.WALKS,
        image_preview: 'https://mdbootstrap.com/img/new/standard/city/018.jpg',
        title: 'Поездка в Калифорнию',
        published_at: '13.01.2022',
        description: 'Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.'
    },
    {
        topic: BlogTopic.THOUGHTS,
        image_preview: 'https://mdbootstrap.com/img/new/standard/city/032.jpg',
        title: 'Выставка в Париже',
        published_at: '12.01.2022',
        description: 'Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed. Integer volutpat ornare erat sit amet rutrum.'
    },
    {
        topic: BlogTopic.BUTTHURT,
        image_preview: 'https://mdbootstrap.com/img/new/standard/city/059.jpg',
        title: 'Бум на бирже',
        published_at: '10.01.2022',
        description: 'Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.'
    }
]

const BlogPosts: FC = () => {
    function renderPreviews() {
        return SampleData.map(el => <BlogArticlePreview {...el} />)
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

export default BlogPosts;