const getters = {
    clientHeight: state => state.app.clientHeight,
    scrollY:state => state.app.scrollY,
    bgVideoPlay: state => state.app.bgVideoPlay,
    search: state => state.app.search,
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    emailDomain: state => state.user.emailDomain,
    emailName: state => state.user.emailName,
    scrollTopDuration: state =>  state.setting.scrollTopDuration,
    theme: state => state.setting.theme,
}

export default getters;