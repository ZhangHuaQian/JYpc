import { getList } from '@/api/request.js'

const state = {
  data: []
}

const mutations = {
  SET_DATA: (state, data) => {
    state.data = data
  }
}

const actions = {
  setMenu({ commit }, id) {
    return new Promise((resolve, reject) => {
      const data = {
        siteId: id
      }
      getList('column', data).then(response => {
        commit('SET_DATA', response.data.data)
        resolve(response.data.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

