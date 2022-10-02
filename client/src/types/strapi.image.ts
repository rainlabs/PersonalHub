import { StrapiImageFormat } from "./strapi_image_format"

export interface StrapiImage {
    formats: {
        small: StrapiImageFormat,
        medium: StrapiImageFormat,
        large: StrapiImageFormat,
        thumbnail: StrapiImageFormat,
    },
    caption: string,
    url: string
}