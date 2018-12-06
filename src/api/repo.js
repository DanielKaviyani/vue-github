import axios from 'axios'

export default {
  repoDetail (username, repo) {
    return axios.get(`https://api.github.com/repos/${username}/${repo}`)
  },
  repoReadme (username, repo) {
    return axios.get(`https://api.github.com/repos/${username}/${repo}/contents/README.md`)
  },
  repoContributors (username, repo) {
    return axios.get(`https://api.github.com/repos/${username}/${repo}/contributors`)
  }
}
