import axios from "axios";
import strapiAuthUtils from "../utils/strapi.auth.utils";

const defaultHeaders = {
    'Content-type': 'application/json',
    'Accept': 'application/json'
}

function getAuth(): Record<string, string> {
    if (strapiAuthUtils.isJwtTokenValid()) {
        return {
            // Authorization: `Bearer ${jwtToken.replace(/['"]+/g, '')}`
            Authorization: `Bearer ${strapiAuthUtils.getJwtToken()}`
        }
    }

    return {}
}

export default axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URI}/api`,
    headers: {...defaultHeaders, ...getAuth()}
});