import { BlogTopic } from "./blog_topic.enum"
import { StrapiImage } from "./strapi.image"
import { StrapiModel } from "./strapi.model"

export type BlogArticleData = {
    topic: BlogTopic,
    imagePreview: StrapiImagePreview,
    title: string,
    publishedAt: string,
    description: string,
    body?: string,
    originalDate?: string,
    location?: LocationData
    gallery?: StrapiDataArray<StrapiImage>,
    references?: ExternalReference[],
    slug: string,
    viewCount: number,
    seo?: StrapiSeo,
    hidden: boolean
}