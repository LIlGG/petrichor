const state = {
    scrollTopDuration: 500
}

const mutations = {
    SET_SCROLL_TOP_DURATION: (state, scrollTopDuration) => {
        state.scrollTopDuration = scrollTopDuration;
    }
}

const actions = {
    setScrollTopDuration({commit}, scrollTopDuration){
        commit('SET_SCROLL_TOP_DURATION', scrollTopDuration)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}