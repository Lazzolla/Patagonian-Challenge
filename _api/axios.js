const axios = require('axios'),
  { CLIENT_ID, CLIENT_SECRET } = require('../config/spotifyAPI'),
  { accessToken } = require('../middlewares/spotify/tokenValidation')

let token
// Get new token 
const refreshToken = (refreshToken) => {
  token = refreshToken
}

let authorizationFetch = axios.create({
  baseURL: 'https://accounts.spotify.com/api/token'
})
authorizationFetch.interceptors.request.use(config => {
  config.headers["Authorization"] = `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`, 'utf8').toString('base64')}`
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config;
});

let songsFetch = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
})
songsFetch.interceptors.request.use(config => {
  config.headers["Authorization"] = token
  return config;
});

exports.authorizationFetch = authorizationFetch
exports.songsFetch = songsFetch
exports.refreshToken = refreshToken