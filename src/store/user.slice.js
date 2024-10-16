import { createSlice } from '@reduxjs/toolkit'
import {useToastSuccess, useToastError} from '../hooks/index'
const userSlice = createSlice({
	name: 'user',
	initialState: {
		isAuthLoading: false,
		isAuth: false,
		user: {},
		token: '',
	},
	reducers: {
		AuthPending (state, action){
			state.isAuthLoading = true
			useToastSuccess({ message: action.payload })
		},
		
		AuthFulfilled (state, action){
			state.isAuthLoading = false
			state.isAuth = true
			state.user = { Name: 'Misha' }
			useToastSuccess({ message: action.payload })
		},
		
		AuthRejected (state, action) {
			state.isAuthLoading = false
			state.isAuth = true
			useToastError({ message: action.payload })
		},
		
		Logout (state) {
			state.isAuthLoading = false
			state.isAuth = false
			useToastSuccess({ message: "Logout"})
		}
	},
})

export const { AuthPending, AuthFulfilled, AuthRejected, Logout } = userSlice.actions

export default userSlice
