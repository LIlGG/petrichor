<!-- 
博客内容页面主题（必须具有高复用性,因此大部分内容选择后台获取。之后缓存）
为了方便起见，我先自己预定义一个最基本的模板，剩余的模板均使用后台进行读取
当前界面只实现最基本的功能，如翻页，展示等，具体功能视后台html而定
 -->
<template>
  <div id="page" class="site wrapper">
    <div class="blank" style="padding-top: 0px;"></div>
    <div id="content" class="site-content">
      <feature :feature="feature"/>
    </div>
    <!-- <div> -->
    <!--<component :is="componentDiv"></component> -->
    <!-- html模板可以从后台传过来，也可以预先写好模板, 目前来说最好是先写一个本地模板，之后全部采用后端读取 -->
    <!-- </div> -->
    <!-- <div class="pattern-center">
            <div class="pattern-attachment-img">
               
            </div>
            <header class="pattern-header">
               
            </header>
        </div>
        <div id="content" class="site-content">
            
    </div>-->
  </div>
</template>

<script>
import Feature from "@/views/Feature";
export default {
  components: {
    Feature
  },
  data() {
    return {
      shtml: `<div><aplayer :musics="{ server: 'netease', type: 'playlist',id: 2345868969 }" :option="{fixed: false}"></aplayer><aplayer :musics="{ server: 'netease', type: 'playlist',id: 2345868969 }" :option="{fixed: false}"></aplayer></div>`,
      musicQuery: {
        server: "netease",
        type: "playlist",
        id: 2345868969
      },
      musicOption: {
        fixed: false
      },
      feature: {
        title: " START:DASH!!",
        featureList: [
          {
            link: "/theme-sakura/",
            img: "https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.2/img/other/sakura.md.png",
            title: "Sakura",
            description: "本站 WordPress 主题"
          },
          {
            link: "/theme-sakura/",
            img: "https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.6/img/other/th%20(3).jpg",
            title: "Pixiv",
            description: "P 站的正确打开方式"
          },
          {
            link: "/theme-sakura/",
            img: "https://view.moezx.cc/images/2019/06/11/74751807_angel.jpg",
            title: "明日方舟",
            description: "游戏主界面 H5 复刻"
          }
        ]
      }
    };
  },
  computed: {
    componentDiv() {
      return { template: this.shtml };
    }
  }
};
</script>
<style lang="less">
.wrapper {
  animation: fade-in;
  animation-duration: 0.5s;
}
.site-content {
  max-width: 800px;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.8);
  &::after {
    content: "";
    display: table;
    table-layout: fixed;
    clear: both
  }
}
#content {
    animation: main 1s
}
</style>
