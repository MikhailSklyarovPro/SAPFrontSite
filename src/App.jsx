import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Toasts from './components/toasts/Toasts.jsx'
import AppRouter from './router/AppRouter.jsx'
import Theme from './styler/Theme.jsx'
import './styles/App.scss'

const App = () => {
	return (
		<BrowserRouter>
			<Theme>
				<AppRouter/>
				<Toasts />
			</Theme>
		</BrowserRouter>
	)
}

export default App
