
// standard header
export function getStandardHeader(token) {
  return {
    'Authorization':`Bearer ${token}`
  }
}