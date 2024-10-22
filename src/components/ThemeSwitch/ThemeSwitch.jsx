import '../ThemeSwitch/ThemeSwitch.scss'
import { useTheme } from '../../hooks/index.js'
import globalConstants from '../../config/globalConstants'
import React from 'react'
import {MoonIcon, SunIcon} from '../../img/Icons.jsx'

export const ThemeSwitch = () => {
    const { SetTheme, isDarkMode } = useTheme()
    return (
        <div className={isDarkMode ? `background switchWhite` : `background switchDark`} onClick={() => SetTheme(isDarkMode ? globalConstants.localStorage.theme.white : globalConstants.localStorage.theme.dark)}>
            <MoonIcon/>
            <SunIcon/>
        </div>
    )
}

export default ThemeSwitch
