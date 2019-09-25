import Cookies from 'js-cookie'

const state = {
    clientHeight: 0,
    scrollY: 0
}

const mutations = {
    SET_CLIENT_HEIGHT: (state, clientHeight) => {
        state.clientHeight = clientHeight;
        Cookies.set('clientHeight', clientHeight)
    },
    
    SET_SCROLL_Y: (state, scrollY) => {
        state.scrollY = scrollY;
        Cookies.set('scrollY', scrollY)
    }
}

const actions = {
    setClientHeight({commit}, clientHeight){
        commit('SET_CLIENT_HEIGHT', clientHeight)
    },

    setScrollY({commit}, scrollY){
        commit('SET_SCROLL_Y', scrollY)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}