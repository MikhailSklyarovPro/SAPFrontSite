import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toasts = () => {
	return (
		<ToastContainer
			position='bottom-right'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='light'
			transition={Bounce}
		/>
	)
}

export default Toasts
