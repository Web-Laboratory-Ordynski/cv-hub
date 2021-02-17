import axios from 'axios'

// const baseUrl = 'http://localhost:5000/api'
const baseUrl = 'https://cv-hub.herokuapp.com/api'

const getFromLs = (value) => {
	const lsData = localStorage.getItem(value)
	if (lsData) {
		return JSON.parse(lsData)
	}
	return
}
const setRefreshTokenToLs = value => localStorage.setItem('refreshToken', value)

axios.interceptors.request.use(
	config => {
		const token = getFromLs('response')?.accessToken
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
		//   console.log(user)
		return axios.post(baseUrl + '/register', user)
			.then(res => {
				return res.data
			}).catch(err => {
				return err?.response?.data?.msg
			})
	},
	login: user => {
		return axios.post(baseUrl + '/login', user)
			.then(res => {
				return res.data
			}).catch(err => {
				return err?.response?.data
			})
	},
	editCv: (cv) => {
		return axios.put(baseUrl + '/edit-cv', { cv } )
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
				return {
					success: false
				}
			}
		} else {
			return {
				success: false
			}
		}
	},
	downloadPdf: (cv) => {
		return axios.post(baseUrl + '/pdf-gen', cv)
			.then(res => {
				return res
			}).catch(err => {
				return err
			})
	}

}

export default API