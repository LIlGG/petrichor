import Cookies from 'js-cookie'

const state = {
    scrollTopDuration: 500,
    theme: Cookies.get('theme') || {},
}

const mutations = {
    SET_SCROLL_TOP_DURATION: (state, scrollTopDuration) => {
        state.scrollTopDuration = scrollTopDuration;
    },
    SET_THEME: (state, theme) => {
        state.theme = theme
        Cookies.set('theme', theme)
    }
}

const actions = {
    setScrollTopDuration({commit}, scrollTopDuration){
        commit('SET_SCROLL_TOP_DURATION', scrollTopDuration)
    },
    setTheme({ commit }, theme) {
        commit('SET_THEME', theme)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}