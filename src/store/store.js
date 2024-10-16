import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { testWebApi } from '../API/testWebApi'
import { rootReducer } from './root.slice'

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(testWebApi.middleware),
})

setupListeners(store.dispatch)

export default store
