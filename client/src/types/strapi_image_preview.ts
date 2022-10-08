import { StrapiData } from "./strapi.data";
import { StrapiImage } from "./strapi.image";

export interface StrapiImagePreview {
    id: number,
    alt: string,
    media: StrapiData<StrapiImage>
}