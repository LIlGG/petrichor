import { asyncRoutes, constantRoutes } from '@/router';

const state = {
    routes: [],
    addRoutes: [],
    isRouter: false
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
        state.isRouter = true
    }
}

const actions = {
    generateRoutes({ commit }) {
        return new Promise(resolve => {
            commit('SET_ROUTES', asyncRoutes)
            resolve(asyncRoutes)
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}