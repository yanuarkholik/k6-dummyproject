import http from 'k6/http'
import { getStandardHeader, getStandardJSONHeader } from '../utils/headers.js'
import { deleteValidator, postValidator, standardValidator } from '../utils/validators.js'

// GenericAPI
export class GenericAPI {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  get(slug = '', token = '') {
    const url = `${this.baseURL}${slug}`
    const params = {
      headers: getStandardHeader(),
      tags: { name: 'standard-get' }
    }

    const res = http.get(url, params)
    const success = standardValidator(res)

    if (!success) {
      console.error(`${slug} Error Status: ${res.status}`)
      console.error(`${slug} Error Body: ${res.body}`)
    }

    return res
  };

  post(slug='', payload) {
    const url = `${this.baseURL}${slug}`
    const params = {
      headers: getStandardJSONHeader(),
      tags: { name: 'standard-post'}
    }

    const res = http.post(url, JSON.stringify(payload), params)
    const success = postValidator(res)
    
    if (!success) {
      console.error(`${slug} Error Status: ${res.status}`)
      console.error(`${slug} Error Body: ${res.body}`)
    }

    return res
  }

  put(slug='', payload) {
    const url = `${this.baseURL}${slug}`
    const params = {
      headers: getStandardJSONHeader(),
      tags: { name: 'standard-put'}
    }

    const res = http.put(url, JSON.stringify(payload), params)
    const success = postValidator(res)
    
    if (!success) {
      console.error(`${slug} URL: ${url}`)
      console.error(`${slug} Error Status: ${res.status}`)
      console.error(`${slug} Error Body: ${res.body}`)
    }

    return res
  }

  delete(slug='') {
    const url = `${this.baseURL}${slug}`
    const params = {
      headers: getStandardHeader(),
      tags: { name: 'standard-delete'}
    }

    const res = http.del(url, params)
    const success = deleteValidator(res)
    
    if (!success) {
      console.error(`${slug} URL: ${url}`)
      console.error(`${slug} Error Status: ${res.status}`)
      console.error(`${slug} Error Body: ${res.body}`)
    }

    return res
  }
}
