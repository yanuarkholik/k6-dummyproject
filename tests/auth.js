import { group } from "k6";
import { getScenarios } from "../scenarios/suites.js";
import { config } from "../config/env.js"
import { authLogin } from "../api/auth-user.js";
import { payloadLogin } from "../utils/payloads.js";

export const options = {
  scenarios: getScenarios(),
  tags: config.systemTags
}

export function runSmokeTest() {
  group('Berhasil get token', () => {
    authLogin('/auth/login', JSON.stringify(payloadLogin))
    // console.log(token)
  })
}
