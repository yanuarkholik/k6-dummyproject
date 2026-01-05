import { config } from "../config/env.js"

// date time now 
const dateNow = new Date()

// payload login 
export const payloadLogin = {
  username: config.username,
  password: config.password
}

// payload create dan put 
export const payloadProducts = {
  title: dateNow 
}
