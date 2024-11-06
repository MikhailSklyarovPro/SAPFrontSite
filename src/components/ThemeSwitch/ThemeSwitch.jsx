import React from 'react'
import globalConstants from '../../config/globalConstants'
import { useTheme } from '../../hooks/index.js'
import { MoonIcon, SunIcon } from '../../img/Icons.jsx'
import '../ThemeSwitch/ThemeSwitch.scss'

export const ThemeSwitch = () => {
    const { SetTheme, isDarkMode } = useTheme()
    return (
        <div className={isDarkMode ? `background switchDark` : `background switchWhite`} onClick={() => SetTheme(isDarkMode ? globalConstants.localStorage.theme.white : globalConstants.localStorage.theme.dark)}>
            <MoonIcon />
            <SunIcon />
        </div>
    )
}

export default ThemeSwitch
