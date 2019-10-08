const state = {
    name: '',
    emailDomain: '',
    emailName: '',
    avatar: ''
}

const mutations = {
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_EMAILDOMAIN: (state, emailDomain) => {
        state.emailDomain = emailDomain;
    },
    SET_EMAIL_NAME: (state, emailName) => {
        state.emailName = emailName;
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