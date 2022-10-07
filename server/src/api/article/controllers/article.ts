/**
 * article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', ({strapi}) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        ctx.query = { ...ctx.query, ...{filters: {slug: id}} }

        const { data, meta } = await super.find(ctx)

        if (data.length === 1) {
            return {data: data[0], meta: {}}
        }

        const sanitizedEntity = await this.sanitizeOutput(data[0], ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
