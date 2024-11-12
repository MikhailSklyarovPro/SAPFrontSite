import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { SideMenu } from '../components/SideMenu/SideMenu.jsx'
import globalConstants from '../config/globalConstants'
import { useUser } from '../hooks/useUser.js'
import { loadRoute, privateRoutes, publicRoutes } from './Routes.jsx'
const AppRouter = () => {
	const { isAuth, isAuthLoading } = useUser()
	const { state, pathname } = useLocation()

	console.log(`isAuth: ${isAuth}, isAuthLoading: ${isAuthLoading}`)

	return !isAuthLoading ? (
		isAuth ? (
			<div className="wrapperPage">
				<SideMenu />
				<div className="content">
					<Routes>
						{privateRoutes.map(route => (
							<Route element={route.element} path={route.path} exact={route.exact} key={route.path} />
						))}
						<Route
							path={globalConstants.routes.login}
							element={<Navigate to={state?.prevUrl || globalConstants.routes.choiceSystem} replace />}
						/>
						{publicRoutes.map(route => (
							<Route element={route.element} path={route.path} exact={route.exact} key={route.path} />
						))}
						<Route path={globalConstants.routes.main} element={<Navigate to={globalConstants.routes.testing} replace />} />
						<Route path={globalConstants.routes.any} element={<Navigate to={globalConstants.routes.error404} replace />} />
					</Routes>
				</div>
			</div>
		) : (
			<Routes>
				{publicRoutes.map(route => (
					<Route element={route.element} path={route.path} exact={route.exact} key={route.path} />
				))}
				{privateRoutes.map(route => (
					<Route
						element={<Navigate to={globalConstants.routes.login} state={{ prevUrl: pathname }} replace />}
						path={route.path}
						exact={route.exact}
						key={route.path}
					/>
				))}
				<Route path={globalConstants.routes.main} element={<Navigate to={globalConstants.routes.login} replace />} />
				<Route path={globalConstants.routes.any} element={<Navigate to={globalConstants.routes.error404} replace />} />
			</Routes>
		)
	) : (
		<Routes>
			<Route element={loadRoute.element} path={loadRoute.path} exact={loadRoute.exact} key={loadRoute.path} />
		</Routes>
	)
}

export default AppRouter
