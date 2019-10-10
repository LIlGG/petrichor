<!-- 
    petrichor 通用组件 - 导航栏
 -->
<template>
  <header class="site-header no-select is-homepage gizle" :class="[{sabit: isTop}, {yya: !isTop}]">
    <div class="site-top">
      <div class="site-branding">
        <logo :logo="logoInfo"></logo>
      </div>
      <div class="lower-cantiner">
        <menu>
          <nav-item></nav-item>
        </menu>
      </div>
      <div class="header-user-avatar">
        <login></login>
      </div>
      <div class="searchbox" @click="search()">
        <icon :iconClass="iconClass"/>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
import Icon from "components/Icon"
export default {
  name: "Navbar",
  components: { 
    Logo,
    Icon
  },
  data() {
    return {
      iconClass: ['iconfont','js-toggle-search', 'iconsearch', 'icon-search'],
    }
  },
  computed: {
    logoInfo() {
      return {
        url: "",
        title: "深巷里的黑猫",
        sakuraso: "深い路地",
        no: "の",
        shironeko: "黑猫"
      };
    },
    isTop() {
      let scrollY = this.$store.getters.scrollY;
      if (scrollY != 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    search() {
      this.$store.dispatch('app/setSearch', true);
    }
  }
};
</script>
<style lang="less">

.searchbox,.site-top .lower,.header-user-avatar {
	animation: searchbox 1s
}

.searchbox {
	float: right;
	height: 75px;
	line-height: 75px;
	margin-left: 20px
}


i.iconfont.js-toggle-search.iconsearch {
	color: #666;
	cursor: pointer;
	font-size: 26px;
	-webkit-transition: all .3s ease-in-out;
	transition: all .3s ease-in-out
}
</style>
