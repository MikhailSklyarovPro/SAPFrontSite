import React from 'react'
import globalConstants from '../config/globalConstants.js'
import { useAuthMutation } from '../API/testWebApi'
import { ButtonClassic } from '../components/UI/ButtonClassic/ButtonClassic.jsx'
import { useTheme } from '../hooks/index'
import { LogoIcon } from '../img/Icons.jsx'
import { NameApp } from '../components/NameApp/NameApp.jsx'
import { TextFieldText } from '../components/UI/TextFieldText/TextFieldText.jsx'

import '../styles/Login.scss'
import { TextFieldPassword } from '../components/UI/TextFieldPassword/TextFieldPassword.jsx'

const Login = () => {
	const { SetTheme, isDarkMode } = useTheme()
	const [auth] = useAuthMutation()
	const onClickAuth = () => auth({ login: 'log', password: 'pass' })

	return (
		<div className="pageLogin">
			<div className="formLogin">
				<div className="loginWrapperLogo">
					<LogoIcon />
					<NameApp />
				</div>
				<TextFieldText placeholder="Логин"/>
				<TextFieldPassword placeholder="Пароль"/>
				<ButtonClassic onClick={onClickAuth} text="Вход" />
				<ButtonClassic text="Забыли пароль?" />
				<ButtonClassic onClick={() => SetTheme(isDarkMode ? globalConstants.localStorage.theme.white : globalConstants.localStorage.theme.dark)} text="Сменить тему" />
			</div>
		</div>
	)
}

export default Login
