import http from 'k6/http'
import { getStandardHeader } from '../utils/headers'

class GenericAPI {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  get(slug = '', token) {
    const url = `https://${this.baseURL}${slug}`
    const params = {
      headers: getStandardHeader(token),
      tags: { name: 'standard-get' }
    }

    const res = http.get(url, params)
  }
}
