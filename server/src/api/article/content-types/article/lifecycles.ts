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
        // const { result, params } = event;
        // // console.log(event)

        // let apiToken = "5566891040:AAGN2LftT0L-ZfwZoxRvMX2KRKWEJUkqVk4";
        // let chatId = "@RainStream";
        // let text = "Hello world!";

        // let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

        // let client = axios.create({
        //     baseURL: `https://api.telegram.org/bot${apiToken}`
        // })

        // await client.post(`/sendMessage?chat_id=${chatId}&text=${result.body}`).then(response => {
        //     console.log(response.data)
        // }).catch(e => {
        //     console.log(e)
        // })
    }
}