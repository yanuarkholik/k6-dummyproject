import { group } from "k6";
import { config } from "../config/env.js";
import { GenericAPI } from "../api/api.js"
import { getScenarios } from "../scenarios/suites.js";

// sate api
const send = new GenericAPI(config.baseURL)

// get scenarios 
export const options = {
  scenarios: getScenarios(),
  tags: config.systemTags
}

export function runSmokeTest() {
  // mnampilkan data products
  group('Berhasil menampilkan data Products', () => {
    send.get('/products')
  })
  
  // menampilkan 1 data
  group('Berhasil menampilkan 1 data Products', () => {
    send.get('/products/1')
  })
  
  // mencari data products
  group('Berhasil menampilkan data Products berdasarkan pencarian', () => {
    send.get('/products/search?q=phone');
  })

  // menampilkan data berdasarkan limi
  group('Berhasil menampilkan 1 data Products', () => {
    send.get('/products?limit=10&skip=10&select=title,price') 
  })

}
