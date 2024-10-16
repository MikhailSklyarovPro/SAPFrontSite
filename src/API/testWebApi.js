import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import globalConstants from '../config/globalConstants'
import { AuthFulfilled, AuthPending, AuthRejected } from '../store/user.slice'

export const testWebApi = createApi({
	reducerPath: globalConstants.api.name,
	baseQuery: fetchBaseQuery({
		baseUrl: globalConstants.api.url,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().user.token
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	endpoints: builder => ({
		login: builder.mutation({
			query: async () => globalConstants.api.endpoints.login,
		}),
		auth: builder.mutation({
			query: () => data => ({
				url: globalConstants.api.endpoints.auth,
				method: 'POST',
				body: JSON.stringify(data),
			}),
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				dispatch(AuthPending('Fetching post...'))
				try {
					const { data } = await queryFulfilled
					dispatch(AuthFulfilled('Post received!'))
				} catch (err) {
					dispatch(AuthRejected('Error fetching post!'))
					console.error(err)
				}
			},
		}),
		Logout: builder.mutation({
			query: async () => globalConstants.api.endpoints.auth,
		}),
	}),
})

export const { useAuthMutation, useLoginMutation, useLogoutMutation } = testWebApi
