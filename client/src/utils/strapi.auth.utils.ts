import { JwtTokenObject } from "../types/jwt_token_object"
import { Buffer } from 'buffer';

const storageKey = 'strapiJwtToken'

function getJwtToken() {
    return localStorage.getItem(storageKey)
}

function setJwtToken(token: string) {
    return localStorage.setItem(storageKey, token)
}

function isJwtTokenValid() {
    const jwtToken = getJwtToken()

    if (jwtToken) {
        const decodedToken = Buffer.from(jwtToken.split('.')[1], 'base64').toString()
        const jwtObject: JwtTokenObject = JSON.parse(decodedToken)

        return jwtObject.exp > (Math.floor((new Date).getTime() / 1000))
    }

    return false
}

export default {
    getJwtToken,
    setJwtToken,
    isJwtTokenValid,
}