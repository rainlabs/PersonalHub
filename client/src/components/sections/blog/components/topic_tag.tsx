import React, { FC } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import BlogButthurtTopicTag from './topic_tags/butthurt_topic_tag';
import BlogThoughtTopicTag from './topic_tags/thought_topic_tag';
import BlogWalkTopicTag from './topic_tags/walk_topic_tag';

type Props = {
    topic: BlogTopic
}

type TopicMap = Record<BlogTopic, React.FC<any>>

const ComponentMap: TopicMap = {
    [BlogTopic.WALKS]: BlogWalkTopicTag,
    [BlogTopic.THOUGHTS]: BlogThoughtTopicTag,
    [BlogTopic.BUTTHURT]: BlogButthurtTopicTag
}

const BlogTopicTag: FC<Props> = ({topic}) => {
    const Component = ComponentMap[topic];
    return <Component />
}

export default BlogTopicTag;