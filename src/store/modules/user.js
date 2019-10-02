const state = {
    name: '',
    email_domain: '',
    email_name: '',
    avatar: ''
}

const mutations = {
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_EMAIL_DOMAIN: (state, email_domain) => {
        state.email_domain = email_domain;
    },
    SET_EMAIL_NAME: (state, email_name) => {
        state.email_name = email_name;
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar;
    }
}

const actions = {
    getInfo({ commit, state }) {
        // 在这里执行网络请求，先使用mock
        commit("SET_NAME", "深巷里的黑猫")
        commit("SET_EMAIL_DOMAIN", "mail")
        commit("SET_EMAIL_NAME", "lixingyong.com")
        commit("SET_AVATAR", "LIlGG")
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}