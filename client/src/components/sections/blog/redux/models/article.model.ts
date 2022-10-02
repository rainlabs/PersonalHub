import { BlogArticleData } from "../../../../../types/blog_article_data";
import { StrapiModel } from "../../../../../types/strapi.model";

export interface BlogArticlePayloadModel {
    list: StrapiModel<BlogArticleData>[],
    currentArticle: StrapiModel<BlogArticleData> | null
}