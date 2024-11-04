import React from 'react'
import { useActions } from '../hooks'
import '../styles/Account.scss'
import { ButtonClassic } from '../components/UI/ButtonClassic/ButtonClassic.jsx'

const Account = () => {
	const {Logout} = useActions()
	return (
		<div>
			<ButtonClassic onClick={() => Logout()} text="Выйти"/>
		</div>
	)
}

export default Account
