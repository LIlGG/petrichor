import Cookies from 'js-cookie'

const state = {
    clientHeight: 0,
    scrollY: 0,
    bgVideoPlay: false
}

const mutations = {
    SET_CLIENT_HEIGHT: (state, clientHeight) => {
        state.clientHeight = clientHeight;
        Cookies.set('clientHeight', clientHeight)
    },
    
    SET_SCROLL_Y: (state, scrollY) => {
        state.scrollY = scrollY;
        Cookies.set('scrollY', scrollY)
    },

    SET_BG_VIDEO_PLAY: (state, bgVideoPlay) => {
        state.bgVideoPlay = bgVideoPlay;
    }
}

const actions = {
    setClientHeight({commit}, clientHeight){
        commit('SET_CLIENT_HEIGHT', clientHeight)
    },

    setScrollY({commit}, scrollY){
        commit('SET_SCROLL_Y', scrollY)
    },

    setBgVideoPlay({ commit }, bgVideoPlay) {
        commit('SET_BG_VIDEO_PLAY', bgVideoPlay)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}