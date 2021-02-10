import axios from 'axios'

const baseUrl = 'http://localhost:5000/api'

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
	
}

export default API