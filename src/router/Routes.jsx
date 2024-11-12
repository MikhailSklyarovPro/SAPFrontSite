import React from 'react'
import globalConstants from '../config/globalConstants'
import Account from '../pages/Account.jsx'
import Error404 from '../pages/Error404.jsx'
import History from '../pages/History.jsx'
import Loading from '../pages/Loading.jsx'
import Login from '../pages/Login.jsx'
import Monitoring from '../pages/Monitoring.jsx'
import Notifications from '../pages/Notifications.jsx'

export const privateRoutes = [
	{ path: globalConstants.routes.testing, element: <Testing />, exact: true },
	{ path: globalConstants.routes.account, element: <Account />, exact: true },
	{ path: globalConstants.routes.error404, element: <Error404 />, exact: true },
	{ path: globalConstants.routes.history, element: <History />, exact: true },
	{ path: globalConstants.routes.monitoring, element: <Monitoring />, exact: true },
	{ path: globalConstants.routes.notification, element: <Notifications />, exact: true },
]

export const publicRoutes = [
	{ path: globalConstants.routes.login, element: <Login />, exact: true },
	{ path: globalConstants.routes.error404, element: <Error404 />, exact: true },
]

export const loadRoute = {
	path: globalConstants.routes.any,
	element: <Loading />,
	exact: true
}
