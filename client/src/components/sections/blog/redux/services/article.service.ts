import QueryString from "qs"
import StrapiService from "../../../../../services/strapi.service"
import strapiAuthUtils from "../../../../../utils/strapi.auth.utils"

function getPublicationState() {
    return strapiAuthUtils.isJwtTokenValid() ? 'preview' : 'live'
}

export default {
    async getLatestArticles() {
        const strapiQuery = QueryString.stringify({
            fields: ['topic', 'title', 'description', 'publishedAt'],
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
            publicationState: getPublicationState()
        }, { encodeValuesOnly: true })

        const response = await StrapiService.get(`/articles?${strapiQuery}`)
        return response.data.data
    },

    async getArticleById(articleId: number) {
        const strapiQuery = QueryString.stringify({
            fields: ['topic', 'title', 'description', 'publishedAt', 'body', 'originalDate'],
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

        const response = await StrapiService.get(`/articles/${articleId}?${strapiQuery}`)
        return response.data.data
    }
}