import React, { FC } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';

type Props = {
    topic: BlogTopic,
}

type TopicTranslation = {
    [key in BlogTopic]: string
}

export const TopicTranslations: TopicTranslation = {
    [BlogTopic.WALK]: 'Прогулки',
    [BlogTopic.THOUGHT]: 'Мысли',
    [BlogTopic.BUTTHURT]: 'Бомбеж',
    [BlogTopic.PROGRAMMING]: 'Программирование',
    [BlogTopic.RECEIPT]: 'Чай',
}

const TopicName: FC<Props> = ({ topic }) => {
    return (
        <>{ TopicTranslations[topic] }</>
    )
}

export default TopicName;