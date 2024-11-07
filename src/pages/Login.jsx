import { useAuthMutation } from '../API/testWebApi'
import { NameApp } from '../components/NameApp/NameApp.jsx'
import { ThemeSwitch } from '../components/ThemeSwitch/ThemeSwitch.jsx'
import { ButtonClassic } from '../components/UI/ButtonClassic/ButtonClassic.jsx'
import { ButtonLink } from '../components/UI/ButtonLink/ButtonLink.jsx'
import { Checkbox } from '../components/UI/Checkbox/Checkbox.jsx'
import { TextField } from '../components/UI/TextField/TextField.jsx'
import { TextFieldPassword } from '../components/UI/TextFieldPassword/TextFieldPassword.jsx'
import { LogoIcon } from '../img/Icons.jsx'
import '../styles/Login.scss'

const Login = () => {
	const [auth] = useAuthMutation()
	const onClickAuth = () => auth({ login: 'log', password: 'pass' })

	return (
		<div className="pageLogin">
			<div className="formLogin">
				<div className="loginWrapperLogo">
					<LogoIcon width={60} height={60} background="var(--background-logo)" />
					<NameApp />
				</div>
				<div className="loginButtonsWrapper">
					<TextField maxLength={20} placeholder="Логин" id="textfieldLogin" />
					<TextFieldPassword maxLength={20} placeholder="Пароль" id="textfieldPassword" />
					<Checkbox label="Запомнить меня" />
					<ButtonClassic onClick={onClickAuth} text="Вход" />
					<ButtonLink text="Забыли пароль?" />
					<ThemeSwitch text="Сменить тему" />
				</div>
			</div>
		</div>
	)
}

export default Login
