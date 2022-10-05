/**
 * article router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::article.article', {
    config: {
        find: {
            policies: ['global::draft-access']
        },
        findOne: {
            policies: ['global::draft-access']
        }
    },
    only: ['find', 'findOne']
});
