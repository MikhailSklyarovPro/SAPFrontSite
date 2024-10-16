/** Объект с глобальными константами
 */
export const globalConstants = {
	routes: {
		any: '*',
		main: '/',
		login: '/login',
		error404: '/404',
		testing: '/testing',
		account: '/account',
		history: '/history',
		monitoring: '/monitoring',
		notification: '/notification'
	},
	api: {
		name: 'sapApi',
		url: 'http://localhost:3000',
		endpoints: {
			auth: '/user/auth',
			login: '/user/login',
			Logout: '/user/Logout',
		},
	},
	localStorage: {
		theme: {
			key: 'Theme',
			white: 'White',
			dark: 'Dark',
		},
		auth: {
			key: 'auth',
		},
	},
	colorsTheme: {
		primary: {
			key: "--color-primary",
			white: "#fff",
			dark: "#373737",
		},
		colorText:{
			key: "--color-text",
			white: "#0f0f0f",
			dark: "#c9c9c9",
		},
		colorBorderTextfield:{
			key: "--color-border-textfield",
			white: "#8f8f8f",
			dark: "#575757",
		},
		colorTextInvert:{
			key: "--color-text-invert",
			white: "#fff",
			dark: "#0f0f0f",
		},
		colorLightBlue:{
			key: "--color-light-blue",
			white: "#0084ff",
			dark: "#0084ff",
		},
		colorWhite:{
			key: "--color-white",
			white: "#fff",
			dark: "#fff",
		},
		colorShadow:{
			key: "--color-shadow",
			white: "#c7c7c7",
			dark: "#222222",
		},
		colorLightBorder:{
			key: "--color-light-border",
			white: "#e1e1e1",
			dark: "#333332",
		},
		colorRed:{
			key: "--color-red",
			white: "#ff4040",
			dark: "#ff4040",
		},
		colorInvertPrimary:{
			key: "--color-invert-primary",
			white: "#373737",
			dark: "#fff",
		},
		colorOcpacityBlue:{
			key: "--color-opacity-blue",
			white: "#ECF2FF",
			dark: "#3F3F3F",
		},
		colorThumb:{
			key: "--color-thumb",
			white: "#ebebeb",
			dark: "#4E4D4D",
		},
		colorOcpacityBlue:{
			key: "--color-opacity-blue",
			white: "#ECF2FF",
			dark: "#3F3F3F",
		},
		colorGrey:{
			key: "--color-grey",
			white: "#5c5c5c",
			dark: "#3F3F3F",
		}
	},
	background:{
		backgroundTextfield:{
			key: "--background-textfield",
			white: "#fbfbfb",
			dark: "#3f3f3f",
		},
		backgroundApp:{
			key: "--background-app",
			white: "#F0F5FA",
			dark: "#313131",
		},
		backgroundThumb:{
			key: "--background-thumb",
			white: "#c9c9c9",
			dark: "#787878",
		}
	},
	typeButton:{
		classic: "classic",
		link: "link"
	},
	size:{
		large: "large",
		medium: "medium",
		small: "small"
	},
	fontWeight:{
		light: "light",
		regular: "regular",
		bold: "bold"
	}
}

export default globalConstants
