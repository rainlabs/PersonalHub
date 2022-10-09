import Cookie, { ICookie } from 'cookie-universal';

let cookies = Cookie();

export default {
    getCookies: () => cookies,
    overrideCookies: (newCookies: ICookie) => {
        if (import.meta.env.SSR) {
            cookies = newCookies
        }
    }
}