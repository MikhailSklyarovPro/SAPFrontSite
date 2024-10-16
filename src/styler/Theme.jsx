import React, {useEffect} from 'react'
import { useTheme } from '../hooks/index'
import globalConstants from '../config/globalConstants.js'

const Theme = ({children}) => {
	const { theme } = useTheme()
	
	useEffect(() => {
		const colors = globalConstants.colorsTheme
		const background = globalConstants.background
		const root = document.getElementById('root')
		if(theme === globalConstants.localStorage.theme.white){
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

			root.style.setProperty(background.backgroundApp.key, background.backgroundApp.white)	
			root.style.setProperty(background.backgroundTextfield.key, background.backgroundTextfield.white)
			root.style.setProperty(background.backgroundThumb.key, background.backgroundThumb.white)	
			
		}else{
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

			root.style.setProperty(background.backgroundApp.key, background.backgroundApp.dark)	
			root.style.setProperty(background.backgroundTextfield.key, background.backgroundTextfield.dark)	
			root.style.setProperty(background.backgroundThumb.key, background.backgroundThumb.dark)	
		}
	}, [theme])

	return (
		<>{children}</>
	)
}

export default Theme