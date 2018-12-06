import api from '../../api/repo'

const state = {
  repoDetail: null,
  repoReadme: null,
  repoContributors: null
}

const actions = {
  repoDetail ({ commit }, info) {
    api.repoDetail(info.username, info.repo).then((Response) => {
      commit('SET_REPO_DETAIL', Response.data)
    })
  },
  repoReadme ({ commit }, info) {
    api.repoReadme(info.username, info.repo).then((Response) => {
      commit('SET_REPO_README', Response.data.content)
    })
  },
  repoContributors ({ commit }, info) {
    api.repoContributors(info.username, info.repo).then((Response) => {
      commit('SET_REPO_CONTRIBUTORS', Response.data)
    })
  }
}

const mutations = {
  SET_REPO_DETAIL (state, detail) {
    state.repoDetail = detail
  },
  SET_REPO_README (state, readme) {
    state.repoReadme = atob(readme)
  },
  SET_REPO_CONTRIBUTORS (state, contributors) {
    state.repoContributors = contributors
  }
}

export default {
  state,
  actions,
  mutations
}
