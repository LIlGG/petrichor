<template>
  <div id="body" :style="theme" >
    <!-- 一些小工具(考虑封装成组件,不应该跟随界面刷新) -->
    <container>
      <router-view/>
    </container>
    <!-- 全局导航栏 -->
    <navbar/>
    <!-- 回到顶部工具 -->
    <back-to-top/>
    <!-- live2d -->
    <live/>
    <!-- 背景音乐播放软件 -->
    <aplayer id="aplayer-float" :musics="musicQuery"/>
    <!-- 搜索页面（默认隐藏） -->
    <search-modal :class="{'is-visible': isSearch}"/>
    <!-- 主题切换 -->
    <theme @click.native="changeSkin" :style="isThemeStyle"/>
    <!-- 主题菜单 -->
    <skin-menu :class="{show: skinShow}"/>
    <!-- 白天黑夜模式 -->
    <canvas class="night-mode-cover" v-show="isnight"></canvas>
  </div>
</template>
<script>
import NProgress from "nprogress";
import { Navbar, SearchModal, Container } from "layout/components";
import Live from "components/Live";
import BackToTop from "components/BackToTop";
import Theme from "components/Theme";
import SkinMenu from "components/SkinMenu";


export default {
  components: {
    Container,
    Navbar,
    SearchModal,
    BackToTop,
    Live,
    Theme,
    SkinMenu
  },
  data() {
    return {
      skinShow: false,
      scrollY: 0,
      clientHeight: 0,
    };
  },
  computed: {
    isSearch() {
      return this.$store.getters.search;
    },
    isnight() {
      return this.$store.getters.theme.isNight;
    },
    isThemeStyle() {
      return this.$store.getters.theme.isNight ? {"background": 'rgba(255,255,255,0.8)'} : {"background": 'none'}
    },
    theme() {
      let newTheme = this.$store.getters.theme;

      if(typeof newTheme === 'string') {
        newTheme = JSON.parse(newTheme);
      }
      let bgImg = "", bgColor = "";
      if(newTheme.isDefault) { //默认主题
        bgImg = "none";
        bgColor = "rgba(255,255,255,1)";
      } else {
        bgImg = "url(" + newTheme.url + ")";
        bgColor = "rgba(255,255,255,1)"
      }
      // 关闭主题选择
      this.skinShow = false;
      return {'background-image': bgImg, 'background-color': bgColor};
    },
    musicQuery() {
      return  {
        server: "netease",
        type: "playlist",
        id: 2345868969
      }
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
    },
    changeSkin() {
      this.skinShow = !this.skinShow;
    }
  },
  watch: {
    clientHeight(newValue) {
      // 当前高度有变化则保存在Vuex
      this.$store.dispatch("app/setClientHeight", newValue);
    },
    scrollY(newValue) {
      // 当前有滑动则关闭主题选择
      this.skinShow = false
      this.$store.dispatch("app/setScrollY", newValue);
    }
  }
};
</script>
