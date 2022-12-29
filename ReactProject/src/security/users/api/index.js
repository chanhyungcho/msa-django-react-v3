// import axios from 'axios'
// import {server, users} from 'context'

// export const blogLogin = req => axios.post(`${server}${users}/login`, req)

import axios from 'axios'
const server = `http://localhost:8000`
export const userLogin = req => axios.post(`${server}/security/users/login`, req)

export const userSignUp = req => axios.post(`${server}/security/users/signup`, req)
