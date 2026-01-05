import http from 'k6/http'
import { config } from '../config/env.js'
import { getStandardJSONHeader } from '../utils/headers.js'
import { authValidator } from '../utils/validators.js'

export function authLogin(slug='', payload) {
  const url = `${config.baseURL}${slug}`
  const params = {
    headers: getStandardJSONHeader(),
    tags: { name: 'auth'},
  }
  
  const res = http.post(url, payload, params)
  const success = authValidator(res)

  if(!success) {
    console.error(`${slug} Error Status: ${res.status}`)
    console.error(`${slug} Error Body: ${res.body}`)
  }

  return res.json('accessToken')
}
