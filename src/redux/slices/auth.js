import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import request from '../../services/request'
import { TOKEN, USER } from '../../utils/constants'
const initialState = {
	user: null,
	isLoading: false,
}

export const login = createAsyncThunk(
	'auth/login',
	async ({ credentials, navigate }) => {
		const { data } = await request.post('auth/login', credentials)

		const { token, role } = data

		Cookies.set(TOKEN, token)
		localStorage.setItem(USER, JSON.stringify(role))

		navigate('/dashboard')
		return data
	}
)

const authSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.role
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
			})
	},
})

const { reducer, name } = authSlice

export { name as authName }

export default reducer
