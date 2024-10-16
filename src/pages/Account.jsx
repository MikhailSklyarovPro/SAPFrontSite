import React from 'react'
import { useActions } from '../hooks'
import { Button } from '../components/UI/Button/ButtonCalssic/Button.jsx'
import '../styles/Account.scss'

const Account = () => {
	const {Logout} = useActions()
	return (
		<div>
			<Button onClick={() => Logout()} text="Выйти"/>
		</div>
	)
}

export default Account
