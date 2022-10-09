import { JwtTokenObject } from "../types/jwt_token_object"
import { Buffer } from 'buffer';
import cookieUtils from "./cookie.utils";

const storageKey = 'strapiJwtToken'

function getJwtToken() {
    return cookieUtils.getCookies().get(storageKey) as string
}

function setJwtToken(token: string) {
    cookieUtils.getCookies().set(storageKey, token, {
        path: '/',
        expires: new Date(getJwtTokenObject(token).exp * 1000)
    })
}

function getJwtTokenObject(jwtToken: string) {
    const decodedToken = Buffer.from(jwtToken.split('.')[1], 'base64').toString()
    const jwtObject: JwtTokenObject = JSON.parse(decodedToken)
    return jwtObject
}

function isJwtTokenValid() {
    const jwtToken = getJwtToken()

    if (jwtToken) {
        const jwtObject = getJwtTokenObject(jwtToken)
        return jwtObject.exp > (Math.floor((new Date).getTime() / 1000))
    }

    return false
}

export default {
    getJwtToken,
    setJwtToken,
    isJwtTokenValid,
}