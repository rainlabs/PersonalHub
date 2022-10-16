import React, { FC, useState } from 'react';
import { ColorMode } from '../types/color_mode.enum';
import ColorModeUtils from '../utils/color_mode.utils';
import MoonIcon from './icons/moon_icon';
import SunIcon from './icons/sun_icon';

type Props = {
    className?: string
}

const ColorModeToggle: FC<Props> = ({className}) => {
    const [colorMode, setColorMode] = useState<ColorMode>(ColorModeUtils.getColorMode())

    function toggleDarkMode(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        const newColorMode = colorMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT
        ColorModeUtils.setColorMode(newColorMode)
        setColorMode(newColorMode)
    }

    return (
        <button
            type='button'
            aria-label='Color Mode'
            className={`flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:hover:text-gray-300 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none active:bg-gray-50 ${className || ''}`}
            onClick={toggleDarkMode}
            >
            <div className='w-5 h-5'>
                {
                    colorMode === ColorMode.LIGHT ? <SunIcon /> : <MoonIcon />
                }
            </div>
        </button>
    )
}

export default ColorModeToggle;