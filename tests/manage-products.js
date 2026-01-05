import { group } from "k6";
import { config } from "../config/env.js";
import { GenericAPI } from "../api/api.js"
import { getScenarios } from "../scenarios/suites.js";
import { payloadProducts } from "../utils/payloads.js";

// sate api
const send = new GenericAPI(config.baseURL)

// get scenarios 
export const options = {
  scenarios: getScenarios(),
  tags: config.systemTags
}

export function runSmokeTest() {
  let id = null;
  group('Berhasil tambah barang', () => {
    id = send.post('/products/add', payloadProducts)
  })

  group('Berasil ubah barang', () => {
    send.put(`/products/1`, payloadProducts)
  })

   group('Berasil delete barang', () => {
    send.delete(`/products/1`)
  })
}
