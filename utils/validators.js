import { check } from "k6";

// standard validator
export function standardValidator(res) {
  return check(res, {
    'Status OK': (r) => r.status === 200,
  })
}

// auth validator
export function authValidator(res) {
  return check(res, {
    'Status OK': (r) => r.status === 200,
    'Body OK': (r) => r.json('accessToken')
  })
}

// post validator
export function postValidator(res) {
  return check(res, {
    'Status OK': (r) => r.status === 200 || r.status === 201,
    'Id present OK': (r) => r.json('id') != null
  })
}

// deleted validator
export function deleteValidator(res) {
  return check(res, {
    'Status OK': (r) => r.status === 200 || r.status === 204,
    'Id deleted OK': (r) => r.json('isDeleted') === true
  })
}
