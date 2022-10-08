import { StrapiModel } from "./strapi.model";

export interface StrapiData<Type> {
    data: StrapiModel<Type>
}

export interface StrapiDataArray<Type> {
    data: StrapiModel<Type>[]
}