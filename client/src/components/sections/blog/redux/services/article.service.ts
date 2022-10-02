import QueryString from "qs"
import StrapiService from "../../../../../services/strapi.service"

const strapiQuery = QueryString.stringify({
    fields: ['topic', 'title', 'description', 'publishedAt'],
    populate: {
        imagePreview: {
            fields: ['formats']
        }
    }
}, { encodeValuesOnly: true })

export default {
    async getLatestArticles() {
        const strapiQuery = QueryString.stringify({
            fields: ['topic', 'title', 'description', 'publishedAt'],
            populate: {
                imagePreview: {
                    fields: ['formats', 'url', 'caption']
                }
            },
            pagination: {
                page: 1,
                pageSize: 10,
                withCount: true
            }
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
                }
            }
        }, { encodeValuesOnly: true })

        const response = await StrapiService.get(`/articles/${articleId}?${strapiQuery}`)
        return response.data.data
    }
}