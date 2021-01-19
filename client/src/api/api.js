import axios from 'axios'

const baseUrl = 'http://localhost:5000/api'

const API = {
  	register: async user => {
    	try {
			const res = await axios.post(baseUrl + '/register', user)
			return res
        } catch(err) {
			console.log(err)
			return err
        }
	},
	login: async user => {
		try {
			const res = await axios.post(baseUrl + '/login', user)
			return res
        } catch(err) {
			console.log(err)
			return err
        }
	},
	editCv: async (cv) => {
		try {
			const res = await axios.put(baseUrl + '/edit-cv', cv)
		} catch (err) {
			console.log(err)
			return err
		}
	}
}

export default API