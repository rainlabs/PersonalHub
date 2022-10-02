import React, { FC } from 'react';
import { BlogArticleData } from '../../../../types/blog_article_data';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import { useArticlesList } from '../hooks/article.hooks';
import BlogArticlePreview from './article_preview';

// const SampleData: BlogArticleData[] = [
//     {
//         topic: BlogTopic.WALK,
//         imagePreview: 'https://mdbootstrap.com/img/new/standard/city/018.jpg',
//         title: 'Поездка в Калифорнию',
//         publishedAt: '13.01.2022',
//         description: 'Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.'
//     },
//     {
//         topic: BlogTopic.THOUGHT,
//         imagePreview: 'https://mdbootstrap.com/img/new/standard/city/032.jpg',
//         title: 'Выставка в Париже',
//         publishedAt: '12.01.2022',
//         description: 'Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed. Integer volutpat ornare erat sit amet rutrum.'
//     },
//     {
//         topic: BlogTopic.BUTTHURT,
//         imagePreview: 'https://mdbootstrap.com/img/new/standard/city/059.jpg',
//         title: 'Бум на бирже',
//         publishedAt: '10.01.2022',
//         description: 'Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.'
//     },
//     {
//         topic: BlogTopic.PROGRAMMING,
//         imagePreview: 'https://mdbootstrap.com/img/new/standard/city/059.jpg',
//         title: 'Выбираем кодстайл',
//         publishedAt: '09.01.2022',
//         description: 'Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.'
//     }
// ]

const BlogArticles: FC = () => {
    const articlesList = useArticlesList()

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