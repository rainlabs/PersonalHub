import QueryString from "qs"
import StrapiService from "../../../../../services/strapi.service"
import { BlogTopic } from "../../../../../types/blog_topic.enum"
import strapiAuthUtils from "../../../../../utils/strapi.auth.utils"

function getPublicationState() {
    return strapiAuthUtils.isJwtTokenValid() ? 'preview' : 'live'
}

function getTopicFilter(topic?: BlogTopic) {
    if (topic) {
        return {
            topic: topic
        }
    }
    return {}
}

export default {
    async getLatestArticles(topic?: BlogTopic) {
        const strapiQuery = QueryString.stringify({
            fields: ['topic', 'title', 'description', 'publishedAt', 'slug', 'viewCount'],
            populate: {
                imagePreview: {
                    fields: ['formats', 'url', 'caption']
                },
                location: {
                    fields: ['displayName']
                }
            },
            pagination: {
                page: 1,
                pageSize: 10,
                withCount: true
            },
            filters: getTopicFilter(topic),
            sort: ['publishedAt:desc'],
            publicationState: getPublicationState()
        }, { encodeValuesOnly: true })

        const response = await StrapiService.get(`/articles?${strapiQuery}`)
        return response.data.data
    },

    async getArticleById(articleSlug: string) {
        const strapiQuery = QueryString.stringify({
            fields: ['topic', 'title', 'description', 'publishedAt', 'slug', 'viewCount', 'body', 'originalDate'],
            populate: {
                imagePreview: {
                    fields: ['formats', 'url', 'caption']
                },
                gallery: {
                    fields: ['formats', 'url', 'caption']
                },
                references: {
                    fields: ['link', 'displayName']
                },
                location: {
                    fields: ['displayName']
                }
            },
            publicationState: getPublicationState()
        }, { encodeValuesOnly: true })

        const response = await StrapiService.get(`/articles/${articleSlug}?${strapiQuery}`)
        return response.data.data
    }
}