import api from '../../api/user'

const state = {
  searchResult: null,
  userRepos: null,
  userDetail: null,
  userFollowers: null,
  userFollowing: null
}

const actions = {
  userSearch ({ commit }, username) {
    api.search(username).then((Response) => {
      commit('SET_SEARCH_RESULT', Response.data)
    })
  },
  userRepos ({ commit }, username) {
    api.userRepos(username).then((Response) => {
      commit('SET_USER_REPOS', Response.data)
    })
  },
  userDetail ({ commit }, username) {
    api.userDetail(username).then((Response) => {
      commit('SET_USER_DETAIL', Response.data)
    })
  },
  userFollowers ({ commit }, username) {
    api.followers(username).then((Response) => {
      commit('SET_USER_FOLLOWERS', Response.data)
    })
  },
  userFollowing ({ commit }, username) {
    api.following(username).then((Response) => {
      commit('SET_USER_FOLLOWING', Response.data)
    })
  }
}

const mutations = {
  SET_SEARCH_RESULT (state, result) {
    state.searchResult = result
  },
  SET_USER_REPOS (state, repos) {
    state.userRepos = repos
  },
  SET_USER_DETAIL (state, detail) {
    state.userDetail = detail
  },
  SET_USER_FOLLOWERS (state, followers) {
    state.userFollowers = followers
  },
  SET_USER_FOLLOWING (state, following) {
    state.userFollowing = following
  }
}

export default {
  state,
  actions,
  mutations
}
