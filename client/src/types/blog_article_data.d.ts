import { BlogTopic } from "./blog_topic.enum"

export type BlogArticleData = {
    topic: BlogTopic,
    image_preview: string,
    title: string,
    published_at: string,
    description: string
}