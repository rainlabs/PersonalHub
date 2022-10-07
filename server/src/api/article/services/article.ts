/**
 * article service
 */

import { factories } from '@strapi/strapi';
import { CollectionTypeService, GenericService } from '@strapi/strapi/lib/core-api/service';

type ListService = GenericService & {
    find?(args: any): void;
};

export default factories.createCoreService<ListService>('api::article.article', ({ strapi }) => ({
    async find(...args) {
        return super.find(...args)
    }
} as ListService));
