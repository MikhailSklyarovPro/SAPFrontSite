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
		notification: '/notification',
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
			key: '--color-primary',
			white: '#fff',
			dark: '#2f3357',
		},
		colorText: {
			key: '--color-text',
			white: '#0f0f0f',
			dark: '#e7e7e7',
		},
		colorBorderTextfield: {
			key: '--color-border-textfield',
			white: '#8f8f8f',
			dark: '#575757',
		},
		colorTextInvert: {
			key: '--color-text-invert',
			white: '#fff',
			dark: '#0f0f0f',
		},
		colorLightBlue: {
			key: '--color-light-blue',
			white: '#0084ff',
			dark: '#0084ff',
		},
		colorWhite: {
			key: '--color-white',
			white: '#fff',
			dark: '#fff',
		},
		colorShadow: {
			key: '--color-shadow',
			white: '#c7c7c7',
			dark: '#222222',
		},
		colorLightBorder: {
			key: '--color-light-border',
			white: '#e9e9e9',
			dark: '#333332',
		},
		colorRed: {
			key: '--color-red',
			white: '#ff4040',
			dark: '#ff4040',
		},
		colorInvertPrimary: {
			key: '--color-invert-primary',
			white: '#373737',
			dark: '#fff',
		},
		colorOcpacityBlue: {
			key: '--color-opacity-blue',
			white: '#ECF2FF',
			dark: '#3F3F3F',
		},
		colorThumb: {
			key: '--color-thumb',
			white: '#ebebeb',
			dark: '#484c75',
		},
		colorLightGrey: {
			key: '--color-light-grey',
			white: '#c4c4c4',
			dark: '#757575',
		},
		colorGrey: {
			key: '--color-grey',
			white: '#8A8A8A',
			dark: '#c0c0c0',
		},
		colorDarkGrey: {
			key: '--color-dark-grey',
			white: '#5d5d5d',
			dark: '#bdbdbd',
		},
		colorIconButtonMenu: {
			key: '--color-icon-button-menu',
			white: '#373737',
			dark: '#54acff',
		},
	},
	background: {
		backgroundTextfield: {
			key: '--background-textfield',
			white: '#fbfbfb',
			dark: '#3f3f3f',
		},
		backgroundApp: {
			key: '--background-app',
			white: '#F0F5FA',
			dark: '#202442',
		},
		backgroundThumb: {
			key: '--background-thumb',
			white: '#c9c9c9',
			dark: '#65688c',
		},
		backgroundLogo: {
			key: '--background-logo',
			white: '#272727',
			dark: '#202442',
		},
		backgroundInvertLogo: {
			key: '--background-invert-logo',
			white: '#272727',
			dark: '#2f3357',
		},
		backgroundActiveButtonMenu: {
			key: '--background-active-button-menu',
			white: '#373737',
			dark: 'var(--color-light-blue)',
		},
	},
}

export default globalConstants
