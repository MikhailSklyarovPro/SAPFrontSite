import React, { useEffect } from 'react'
import globalConstants from '../config/globalConstants.js'
import { useTheme } from '../hooks/index'

const Theme = ({ children }) => {
	const { theme } = useTheme()

	useEffect(() => {
		const colors = globalConstants.colorsTheme
		const background = globalConstants.background
		const root = document.getElementById('root')
		if (theme === globalConstants.localStorage.theme.white) {
			root.style.setProperty(colors.primary.key, colors.primary.white)
			root.style.setProperty(colors.colorText.key, colors.colorText.white)
			root.style.setProperty(colors.colorBorderTextfield.key, colors.colorBorderTextfield.white)
			root.style.setProperty(colors.colorTextInvert.key, colors.colorTextInvert.white)
			root.style.setProperty(colors.colorLightBlue.key, colors.colorLightBlue.white)
			root.style.setProperty(colors.colorWhite.key, colors.colorWhite.white)
			root.style.setProperty(colors.colorShadow.key, colors.colorShadow.white)
			root.style.setProperty(colors.colorLightBorder.key, colors.colorLightBorder.white)
			root.style.setProperty(colors.colorRed.key, colors.colorRed.white)
			root.style.setProperty(colors.colorInvertPrimary.key, colors.colorInvertPrimary.white)
			root.style.setProperty(colors.colorOcpacityBlue.key, colors.colorOcpacityBlue.white)
			root.style.setProperty(colors.colorGrey.key, colors.colorGrey.white)
			root.style.setProperty(colors.colorThumb.key, colors.colorThumb.white)
			root.style.setProperty(colors.colorDarkGrey.key, colors.colorDarkGrey.white)
			root.style.setProperty(colors.colorLightGrey.key, colors.colorLightGrey.white)
			root.style.setProperty(colors.colorIconButtonMenu.key, colors.colorIconButtonMenu.white)

			root.style.setProperty(background.backgroundApp.key, background.backgroundApp.white)
			root.style.setProperty(background.backgroundTextfield.key, background.backgroundTextfield.white)
			root.style.setProperty(background.backgroundThumb.key, background.backgroundThumb.white)
			root.style.setProperty(background.backgroundLogo.key, background.backgroundLogo.white)
			root.style.setProperty(background.backgroundInvertLogo.key, background.backgroundInvertLogo.white)
			root.style.setProperty(background.backgroundActiveButtonMenu.key, background.backgroundActiveButtonMenu.white)


		} else {
			root.style.setProperty(colors.primary.key, colors.primary.dark)
			root.style.setProperty(colors.colorText.key, colors.colorText.dark)
			root.style.setProperty(colors.colorBorderTextfield.key, colors.colorBorderTextfield.dark)
			root.style.setProperty(colors.colorTextInvert.key, colors.colorTextInvert.dark)
			root.style.setProperty(colors.colorWhite.key, colors.colorWhite.dark)
			root.style.setProperty(colors.colorShadow.key, colors.colorShadow.dark)
			root.style.setProperty(colors.colorLightBorder.key, colors.colorLightBorder.dark)
			root.style.setProperty(colors.colorRed.key, colors.colorRed.dark)
			root.style.setProperty(colors.colorInvertPrimary.key, colors.colorInvertPrimary.dark)
			root.style.setProperty(colors.colorOcpacityBlue.key, colors.colorOcpacityBlue.dark)
			root.style.setProperty(colors.colorGrey.key, colors.colorGrey.dark)
			root.style.setProperty(colors.colorThumb.key, colors.colorThumb.dark)
			root.style.setProperty(colors.colorDarkGrey.key, colors.colorDarkGrey.dark)
			root.style.setProperty(colors.colorLightGrey.key, colors.colorLightGrey.dark)
			root.style.setProperty(colors.colorIconButtonMenu.key, colors.colorIconButtonMenu.dark)

			root.style.setProperty(background.backgroundApp.key, background.backgroundApp.dark)
			root.style.setProperty(background.backgroundTextfield.key, background.backgroundTextfield.dark)
			root.style.setProperty(background.backgroundThumb.key, background.backgroundThumb.dark)
			root.style.setProperty(background.backgroundLogo.key, background.backgroundLogo.dark)
			root.style.setProperty(background.backgroundInvertLogo.key, background.backgroundInvertLogo.dark)
			root.style.setProperty(background.backgroundActiveButtonMenu.key, background.backgroundActiveButtonMenu.dark)
		}
	}, [theme])

	return (
		<>{children}</>
	)
}

export default Theme
