import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import createApi from './create_api';
import QueryString from 'qs';
import { BlogArticleData } from '../../../../../types/blog_article_data';
import { BlogTopic } from '../../../../../types/blog_topic.enum';
import { StrapiModel } from '../../../../../types/strapi.model';
import { StrapiResponse } from '../../../../../types/strapi_response';
import strapiAuthUtils from '../../../../../utils/strapi.auth.utils';
import { BlogHeroSlideData } from '../../../../../types/blog_hero_slide_data';

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

function buildArticlesQuery(page: number, topic?: BlogTopic) {
    return QueryString.stringify({
        fields: ['topic', 'title', 'description', 'publishedAt', 'slug', 'viewCount'],
        populate: {
            imagePreview: {
                populate: {
                    media: {
                        fields: ['formats', 'url', 'caption']
                    }
                }
            },
            location: {
                fields: ['displayName']
            }
        },
        pagination: {
            page: page,
            pageSize: 10,
            withCount: true
        },
        filters: getTopicFilter(topic),
        sort: ['publishedAt:desc'],
        publicationState: getPublicationState()
    }, { encodeValuesOnly: true })
}

function buildArticleQuery() {
    return QueryString.stringify({
        fields: ['topic', 'title', 'description', 'publishedAt', 'slug', 'viewCount', 'body', 'originalDate', 'hidden'],
        populate: {
            imagePreview: {
                populate: {
                    media: {
                        fields: ['formats', 'url', 'caption']
                    }
                }
            },
            gallery: {
                fields: ['formats', 'url', 'caption']
            },
            references: {
                fields: ['link', 'displayName']
            },
            location: {
                fields: ['displayName']
            },
            seo: {
                fields: ['*']
            }
        },
        publicationState: getPublicationState()
    }, { encodeValuesOnly: true })
}

function buildHeroSlidesQuery() {
    return QueryString.stringify({
        populate: {
            image: {
                populate: {
                    media: {
                        fields: ['formats', 'url', 'caption']
                    }
                }
            }
        },
        publicationState: getPublicationState()
    }, { encodeValuesOnly: true })
}

export const ArticleApiSlice = createApi({
    reducerPath: 'articles',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_SSR_URI}/api`,
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-type', 'application/json')
            headers.set('Accept', 'application/json')

            if (strapiAuthUtils.isJwtTokenValid()) {
                headers.set('Authorization', `Bearer ${strapiAuthUtils.getJwtToken()}`)
            }

            return headers
        }
    }),
    endpoints: (builder) => ({
        getArticles: builder.query<StrapiResponse<StrapiModel<BlogArticleData>[]>, {page: number, topic?: BlogTopic}>({
            query: ({page, topic}) => `/articles?${buildArticlesQuery(page, topic)}`
        }),
        getArticleBySlug: builder.query<StrapiResponse<StrapiModel<BlogArticleData>>, string>({
            query: (articleSlug: string) => `/articles/${articleSlug}?${buildArticleQuery()}`
        }),
        getHeroSlides: builder.query<StrapiResponse<StrapiModel<BlogHeroSlideData>[]>, void>({
            query: () => `/hero-slides?${buildHeroSlidesQuery()}`
        }),
    })
})

export const { useGetArticlesQuery, useGetArticleBySlugQuery, useGetHeroSlidesQuery } = ArticleApiSlice