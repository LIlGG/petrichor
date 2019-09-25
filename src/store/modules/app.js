import Cookies from 'js-cookie'

const state = {
    clientHeight: 0
}

const mutations = {
    SET_CLIENT_HEIGHT: (state, clientHeight) => {
        state.clientHeight = clientHeight;
        Cookies.set('clientHeight', clientHeight)
    }
}

const actions = {
    setClientHeight({commit}, clientHeight){
        commit('SET_CLIENT_HEIGHT', clientHeight)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}