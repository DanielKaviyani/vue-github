import axios from 'axios'

export default {
  search (username) {
    return axios.get(`https://api.github.com/search/users?q=${username}&per_page=6`)
  },
  userRepos (username) {
    return axios.get(`https://api.github.com/users/${username}/repos`)
  },
  userDetail (username) {
    return axios.get(`https://api.github.com/users/${username}`)
  },
  followers (username) {
    return axios.get(`https://api.github.com/users/${username}/followers`)
  },
  following (username) {
    return axios.get(`https://api.github.com/users/${username}/following`)
  }
}
