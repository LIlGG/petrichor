<template>
  <div id="app">
    <!-- 路由匹配到的组件，当前组件为一个全局的Layout框架 -->
    <router-view/>
    <!-- 一些小工具(考虑封装成组件,不应该跟随界面刷新) -->
    <!-- 全局导航栏 -->
    <navbar/>
    <!-- 回到顶部工具 -->
    <back-to-top/>
    <!-- live2d -->
    <live/>
    <!-- 主题切换 -->
    <div></div>
    <!-- 背景音乐播放软件 -->
    <a-player id="aplayer-float" :options="aplayerOptions"/>
    <!-- 搜索页面（默认隐藏） -->
    <search-modal :class="{'is-visible': isSearch}"/>
  </div>
</template>
<script>
import NProgress from "nprogress";
import { Navbar, SearchModal } from "layout/components";
import Live from "components/Live";
import BackToTop from "components/BackToTop";
import APlayer from "components/APlayer";

import { music } from "@/api/music";
export default {
  components: {
    Navbar,
    SearchModal,
    BackToTop,
    Live,
    APlayer
  },
  data() {
    return {
      scrollY: 0,
      clientHeight: 0,
      aplayerOptions: {
        lrcType: 3,
        fixed: true,
        listFolded: false,
        order: "random",
        autoplay: false
      },
      musicQuery: {
        server: "netease",
        type: "playlist",
        id: 2345868969
      }
    };
  },
  computed: {
    isSearch() {
      return this.$store.getters.search;
    }
  },
  mounted() {
    // 获取全局页面滚动高度
    window.addEventListener("scroll", this.handleScroll);
    // 获取全局浏览器可视区域高度
    this.clientHeight = document.documentElement.clientHeight;
    // 监听窗口变化事件
    window.onresize = () => {
      this.clientHeight = document.documentElement.clientHeight;
    };

    // 假设获取歌单
    music(this.musicQuery).then(response => {
      this.$set(this.aplayerOptions, "audio", response);
    });
  },
  methods: {
    handleScroll() {
      // 屏幕剩余的高度
      let surplus =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      // 当前滑动高度
      this.scrollY = document.documentElement.scrollTop;
      // 当前位置小数
      let coorY = scrollY / surplus;
      NProgress.set(coorY);
    }
  },
  watch: {
    clientHeight(newValue) {
      // 当前高度有变化则保存在Vuex
      this.$store.dispatch("app/setClientHeight", newValue);
    },
    scrollY(newValue) {
      this.$store.dispatch("app/setScrollY", newValue);
    }
  }
};
</script>
