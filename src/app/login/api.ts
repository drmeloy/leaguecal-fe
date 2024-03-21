import axios from "axios"

const BASE_URL = 'http://localhost:3001'

export const loginOrSignupUser = async (username: string, password: string, loginOrSignup: 'login' | 'signup') => {
  try { 
    const res = await axios.post(`${BASE_URL}/${loginOrSignup}`, { username, password })
    console.log(`${loginOrSignup} success: `, res.data);
  } catch (err) {
    console.error(`${loginOrSignup} fail: `, err)
  }
}
