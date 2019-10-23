import APlayer from './APlayer'
let plugin = (Vue) => {
    if(plugin.installed) {
        return;
    }
    Vue.component('aplayer', APlayer);
}

export default plugin