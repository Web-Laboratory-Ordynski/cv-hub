import axios from 'axios'

const baseUrl = 'http://localhost:5000/api'

const getFromLs = (value) => JSON.parse(localStorage.getItem(value))
const setRefreshTokenToLs = value => localStorage.setItem('refreshToken', value)

axios.interceptors.request.use(
	config => {
		const token = getFromLs('response').token
		console.log(token)
		if (token) {
			config.headers['Authorization'] = 'Bearer ' + token;
		}
		return config;
	},
	error => {
		Promise.reject(error)
	})

const API = {
  	register: async user => {
		return axios.post(baseUrl + '/register', user)
			.then(res => {
				return res.data
			}).catch(err => {
				return err.response.data.msg
			})
	},
	login: user => {
		return axios.post(baseUrl + '/login', user)
			.then(res => {
				return res.data
			}).catch(err => {
				return err.response.data
			})
	},
	editCv: (cv, token) => {
		return axios.put(baseUrl + '/edit-cv', cv, { headers: {  'Authorization': 'Bearer ' + token } })
			.then(res => {
				return res.data
			}).catch(err => {
				return err.response.data
			})
	},
	getNewToken: async () => {
		const refreshToken = getFromLs('response').refreshToken
		console.log(refreshToken)
		if(refreshToken) {
			const res = await axios.post(baseUrl + '/get-new-token', { refreshToken })
			if(res.status === 200) {
				setRefreshTokenToLs(res.data.accessToken)

				return {
					accessToken: res.data.accessToken,
					user: res.data.user,
					success: true//res.data.success
				}
			} else {
				return false
			}
		} else {
			return false
		}
	}

}

export default API