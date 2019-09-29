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
    <!-- 音乐播放软件 -->
    <a-player :options="aplayerOptions"/>
  </div>
</template>
<script>
import NProgress from "nprogress";
import { Navbar } from "layout/components";
import Live from "components/Live";
import BackToTop from "components/BackToTop";
import APlayer from "components/APlayer";

import { music } from '@/api/music'
export default {
  components: {
    Navbar,
    BackToTop,
    Live,
    APlayer
  },
  data() {
    return {
      scrollY: 0,
      clientHeight: 0,
      aplayerOptions: {
        lrcType:3,
        fixed: true,
        listFolded: false
      },
      musicQuery: {
        server: "netease",
        type: "playlist",
        id: 2345868969
      }
    };
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
      this.$set(this.aplayerOptions,"audio", response)
    })
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

<style lang="less">
#nprogress {
  pointer-events: none;
  z-index: 99999;
  position: absolute;
}

#nprogress .bar {
  background: orange;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
}

#nprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px orange, 0 0 5px orange;
  opacity: 1;
  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}
#app {
  background-color: #f2f2f2;
  height: 4300px;
  overflow-y: auto;
  overflow-x: hidden;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    -webkit-transform: rotate(360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(360deg);
    /* IE 9 */
    transform: rotate(360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    -webkit-transform: rotate(360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(360deg);
    /* IE 9 */
    transform: rotate(360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}

// 滚动条样式

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #eee;
}

#mo-nav::-webkit-scrollbar {
  width: 0;
  opacity: 0;
}

::-webkit-scrollbar-track {
  background-color: #eee;
}

::-webkit-scrollbar-thumb {
  background-color: #69d2e7;
}

::-webkit-scrollbar-thumb {
  background: #fe9600;
}
</style>
