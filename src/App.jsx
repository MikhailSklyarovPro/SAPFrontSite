import React from 'react'
import { HashRouter } from 'react-router-dom'
import Toasts from './components/toasts/Toasts.jsx'
import AppRouter from './router/AppRouter.jsx'
import Theme from './styler/Theme.jsx'
import './styles/App.scss'

const App = () => {
	return (
		<HashRouter>
			<Theme>
				<AppRouter/>
				<Toasts />
			</Theme>
		</HashRouter>
	)
}

export default App
