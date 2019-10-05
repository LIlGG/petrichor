const getters = {
    clientHeight: state => state.app.clientHeight,
    scrollY:state => state.app.scrollY,
    bgVideoPlay: state => state.app.bgVideoPlay,
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    email_domain: state => state.user.email_domain,
    email_email_name: state => state.user.email_name,
    
}

export default getters;