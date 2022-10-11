/**
 * hero-slide router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::hero-slide.hero-slide', {
    config: {
        find: {
            policies: ['global::draft-access']
        }
    },
    only: ['find']
});
