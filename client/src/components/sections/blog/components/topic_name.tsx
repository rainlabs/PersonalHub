import React, { FC } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import LocationIcon from '../../../icons/location_icon';

type Props = {
    topic: BlogTopic,
}

type TopicTranslation = {
    [key in BlogTopic]: string
}

const Translations: TopicTranslation = {
    [BlogTopic.WALK]: 'Прогулки',
    [BlogTopic.THOUGHT]: 'Мысли',
    [BlogTopic.BUTTHURT]: 'Бомбеж',
    [BlogTopic.PROGRAMMING]: 'Программирование',
    [BlogTopic.RECEIPT]: 'Чай',
}

const TopicName: FC<Props> = ({ topic }) => {
    return (
        <>{ Translations[topic] }</>
    )
}

export default TopicName;