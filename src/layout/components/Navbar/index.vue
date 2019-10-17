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
        <div class="lower">
           <!-- 这里在当前页面小的时候，展示一个按钮 -->
          <nav class="mobile-fit-control hide">
            <ul class="menu">
              <nav-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" :subShow="subShow"></nav-item>
            </ul>
          </nav>
        </div>
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
import { mapGetters } from 'vuex'

import Logo from "./Logo";
import Icon from "components/Icon"
import NavItem from './NavItem';

export default {
  name: "Navbar",
  components: { 
    Logo,
    Icon,
    NavItem
  },
  data() {
    return {
      iconClass: ['iconfont','js-toggle-search', 'iconsearch', 'icon-search'],
      subShow: false
    }
  },
  computed: {
    routes() {
      return this.$store.getters.routes
    },
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

.site-top{
  .lower{
    nav {
      display: block !important;
    }
  }
}
</style>
