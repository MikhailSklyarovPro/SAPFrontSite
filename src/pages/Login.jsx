import React from 'react'
import { useTheme } from '../hooks/index'
import { useAuthMutation } from '../API/testWebApi'
import {TextfieldClassic} from '../components/UI/TextFields/Classic/TextfieldClassic.jsx'
import {TextfieldPassword} from '../components/UI/TextFields/Password/TextfieldPassword.jsx'
import {Button} from '../components/UI/Button/ButtonCalssic/Button.jsx'
import { Title } from '../components/UI/Title/Title.jsx'
import globalConstants from '../config/globalConstants.js'
import '../styles/Login.scss'

const Login = () => {
	const {theme, SetTheme, isDarkMode} = useTheme()
	const [auth, { isLoading, isFetching }] = useAuthMutation()
	const onClickAuth = () => auth({ login: 'log', password: 'pass' })

	return (
		<div className="pageLogin">
			<div className="formLogin">
				<Title text="Авторизация" size={globalConstants.size.medium}/>
				<TextfieldClassic placeholder="Логин" isPassword={false}/>
				<TextfieldPassword placeholder="Пароль" isPassword={true}/>
				<Button onClick={onClickAuth} text="Вход" typeButton={globalConstants.typeButton.classic}/>
				<Button text="Забыли пароль?" typeButton={globalConstants.typeButton.link}/>
				<Button onClick={() => SetTheme(isDarkMode ? globalConstants.localStorage.theme.white : globalConstants.localStorage.theme.dark)} text="Сменить тему" typeButton={globalConstants.typeButton.classic}/>
			</div>
		</div>
	)
}

export default Login
