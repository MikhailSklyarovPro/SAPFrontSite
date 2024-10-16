import { combineReducers } from '@reduxjs/toolkit'
import { testWebApi } from '../API/testWebApi'
import userSlice from './user.slice'

export const rootReducer = combineReducers({
	[testWebApi.reducerPath]: testWebApi.reducer,
	user: userSlice.reducer,
})

export const rootActions = {
	...userSlice.actions,
}

export default rootReducer
