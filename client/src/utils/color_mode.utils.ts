import { ColorMode } from "../types/color_mode.enum";

const colorModeKey = 'colorMode'

const getSystemColorMode = (): ColorMode => {
    if (import.meta.env.SSR) {
        return ColorMode.LIGHT
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? ColorMode.DARK : ColorMode.LIGHT
}

const getColorMode = (): ColorMode => {
    let mode: ColorMode = getSystemColorMode()
    if (!import.meta.env.SSR) {
        const localMode = localStorage.getItem(colorModeKey)
        if (localMode) {
            mode = localMode as ColorMode
        }
    }

    return mode
}

const applyColorMode = () => {
    if (!import.meta.env.SSR) {
        if (getColorMode() === ColorMode.LIGHT) {
            document.documentElement.classList.remove('dark')
        }
        else {
            document.documentElement.classList.add('dark')
        }
    }
}

const ColorModeUtils = {
    setColorMode: (mode: ColorMode) => {
        if (!import.meta.env.SSR) {
            localStorage.setItem(colorModeKey, mode)
            applyColorMode()
        }
    },

    applyColorMode,
    getColorMode
}

export default ColorModeUtils