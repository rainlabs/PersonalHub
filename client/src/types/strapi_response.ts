import { StrapiMeta } from "./strapi.meta";

export interface StrapiResponse<Type> {
    data: Type,
    meta: StrapiMeta
}