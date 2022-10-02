import React, { FC } from 'react';
import { BlogTopic } from '../../../../types/blog_topic.enum';
import BlogButthurtTopicTag from './topic_tags/butthurt_topic_tag';
import BlogProgrammingTopicTag from './topic_tags/programming_topic_tag';
import BlogReceiptTopicTag from './topic_tags/receipt_tag';
import BlogThoughtTopicTag from './topic_tags/thought_topic_tag';
import BlogWalkTopicTag from './topic_tags/walk_topic_tag';

type Props = {
    topic: BlogTopic,
    className?: string
}

type TopicMap = Record<BlogTopic, React.FC<any>>

const ComponentMap: TopicMap = {
    [BlogTopic.WALK]: BlogWalkTopicTag,
    [BlogTopic.THOUGHT]: BlogThoughtTopicTag,
    [BlogTopic.BUTTHURT]: BlogButthurtTopicTag,
    [BlogTopic.PROGRAMMING]: BlogProgrammingTopicTag,
    [BlogTopic.RECEIPT]: BlogReceiptTopicTag
}

const BlogTopicTag: FC<Props> = ({topic, className}) => {
    const Component = ComponentMap[topic];
    return <Component className={className} />
}

export default BlogTopicTag;