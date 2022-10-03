import { BlogTopic } from "./blog_topic.enum"
import { StrapiImage } from "./strapi.image"
import { StrapiModel } from "./strapi.model"

export type BlogArticleData = {
    topic: BlogTopic,
    imagePreview: {
        data: StrapiModel<StrapiImage>
    },
    title: string,
    publishedAt: string,
    description: string,
    body?: string,
    originalDate?: string,
    gallery?: {
        data: StrapiModel<StrapiImage>[]
    },
    references?: ExternalReference[]
}