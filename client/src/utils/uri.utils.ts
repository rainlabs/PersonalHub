export default {
    getURL(input_url: string) {
        if (input_url.length > 0 && input_url[0] === '/') {
            return `${import.meta.env.VITE_BACKEND_URI}${input_url}`
        }

        return input_url
    }
}