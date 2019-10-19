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
          <nav class="">
            <!-- <ul class="menu">
              <nav-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></nav-item>
            </ul>-->
            <ul class="">
              <li>
                <a href="#/" class="router-link-exact-active router-link-active">
                  <span class="faa-parent animated-hover">
                    <i aria-hidden="true" class="fa fa-fort-awesome faa-horizontal"></i>首页
                  </span>
                </a>
                <!---->
              </li>
              <!---->
              <li>
                <a href="#/archives" class="">
                  <span class="faa-parent animated-hover">
                    <i aria-hidden="true" class="fa fa-archive faa-shake"></i>归档
                  </span>
                </a>
                <ul>
                  <li>
                    <a href="#/archives/hacking" class="">
                      <i aria-hidden="true" class="fa fa-terminal"></i>极客
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a href="#/archives/article" class="">
                      <i aria-hidden="true" class="fa fa-file-text-o"></i>文章
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a href="#/archives/review" class="">
                      <i aria-hidden="true" class="fa fa-quote-right"></i>影评
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a href="#/archives/thingking" class="">
                      <i aria-hidden="true" class="fa fa-commenting-o"></i>随想
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a href="#/archives/top" class="">
                      <i aria-hidden="true" class="fa fa-commenting-o"></i>笔记
                    </a>
                    <!---->
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/*" class="">
                  <span class="faa-parent animated-hover">
                    <i aria-hidden="true" class="fa fa-list-ul faa-vertical"></i>清单
                  </span>
                </a>
                <ul>
                  <li>
                    <a href="#/*/book-list" class="">
                      <i aria-hidden="true" class="fa fa-th-list faa-bounce"></i>书单
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a href="#/*/bangumi" class="">
                      <i aria-hidden="true" class="fa fa-film faa-vertical"></i>番组
                    </a>
                    <!---->
                  </li>
                  <li>
                    <a href="#/*/music" class="">
                      <i aria-hidden="true" class="fa fa-headphones"></i>歌单
                    </a>
                    <!---->
                  </li>
                </ul>
              </li>
              <!---->
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
import { mapGetters } from "vuex";

import Logo from "./Logo";
import Icon from "components/Icon";
import NavItem from "./NavItem";

export default {
  name: "Navbar",
  components: {
    Logo,
    Icon,
    NavItem
  },
  data() {
    return {
      iconClass: ["iconfont", "js-toggle-search", "iconsearch", "icon-search"]
    };
  },
  computed: {
    routes() {
      return this.$store.getters.routes;
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
      this.$store.dispatch("app/setSearch", true);
    }
  }
};
</script>
<style lang="less">
.searchbox,
.site-top .lower,
.header-user-avatar {
  animation: searchbox 1s;
}

.searchbox {
  float: right;
  height: 75px;
  line-height: 75px;
  margin-left: 20px;
}

i.iconfont.js-toggle-search.iconsearch {
  color: #666;
  cursor: pointer;
  font-size: 26px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.site-top {
  .lower {
    nav {
      display: block !important;
    }
  }
}
</style>
