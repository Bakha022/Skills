import { message } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import { __END_POINT, TOKEN } from '../utils/constants'
const request = axios.create({
	baseURL: __END_POINT,
	timeout: 10000,
})

request.interceptors.request.use(
	function (response) {
		const token = Cookies.get(TOKEN)

		response.headers.Authorization = `Bearer ${token}`
		return response
	},
	function (error) {
		return Promise.reject(error)
	}
)

request.interceptors.response.use(
	function (response) {
		return response
	},
	function (error) {
		if (error.response && error.response.data) {
			message.error(error.response.data)
		}
		return Promise.reject(error)
	}
)

export default request
