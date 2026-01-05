export const config = {
  // base url
  baseURL: __ENV.baseURL || 'https://dummyjson.com',

  username: __ENV.username || 'emilys',
  password: __ENV.password || 'emilyspass',

  // system tags 
  systemTags: {
    environment: __ENV.ENV || 'staging',
    project: 'galeri-24-k6',
  },
}
