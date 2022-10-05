import url from 'url'

// restrict access to draft content for non authtenticated users
export default (policyContext, config, { strapi }) => {
    if (!policyContext.state.user) {
        const queryObject = url.parse(policyContext.originalUrl, true)
        if (Object.keys(queryObject.query).length > 0 && queryObject.query['publicationState'] === 'preview') {
            return false
        }
    }

    return true;
};
