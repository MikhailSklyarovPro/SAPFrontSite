import React from 'react'
import { useAuthMutation } from '../API/testWebApi'
import NameApp from '../components/NameApp/NameApp.jsx'
import { Button } from '../components/UI/Button/ButtonCalssic/Button.jsx'
import { TextfieldClassic } from '../components/UI/TextFields/Classic/TextfieldClassic.jsx'
import { TextfieldPassword } from '../components/UI/TextFields/Password/TextfieldPassword.jsx'
import globalConstants from '../config/globalConstants.js'
import { useTheme } from '../hooks/index'
import { LogoIcon } from '../img/Icons.jsx'
import '../styles/Login.scss'

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
				<TextfieldClassic placeholder="Логин" isPassword={false} />
				<TextfieldPassword placeholder="Пароль" isPassword={true} />
				<My onClick={onClickAuth} text="Вход" />
				<Button text="Забыли пароль?" />
				<Button onClick={() => SetTheme(isDarkMode ? globalConstants.localStorage.theme.white : globalConstants.localStorage.theme.dark)} text="Сменить тему" />
			</div>
		</div>
	)
}

export default Login
