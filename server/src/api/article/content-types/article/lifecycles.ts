import axios from 'axios'

export default {
    afterFindMany(event) {
        const { result, params } = event;

        if (result.length === 1 && params.where?.slug) {
            const article = result[0]
            const ctx = strapi['requestContext'].get();

            if (article.publishedAt && !ctx.state.user) {
                strapi.db.query('api::article.article').update({
                    where: { id: article.id },
                    data: {
                        viewCount: parseInt(article.viewCount || 0) + 1
                    }
                });
            }
        }
    },
    async afterUpdate(event) {

    }
}