<!-- 
博客内容页面主题（必须具有高复用性,因此大部分内容选择后台获取。之后缓存）
为了方便起见，我先自己预定义一个最基本的模板，剩余的模板均使用后台进行读取
当前界面只实现最基本的功能，如翻页，展示等，具体功能视后台html而定
【后续考虑之后，决定对于每个单独的页面设置一个不同的page，这样比较方便】
【大部分界面都会经过page.vue界面,当前页面只控制大致的样式以及获取后台内容并进行内容分发（分隔不同的内容，
  例如背景图数据，主内容数据，评论数据的分发）】
 -->
<template>
  <div id="page" class="site wrapper" v-if="content">
    <!-- 
      最外层为统一的界面，所有的界面大致上都需要经过此页面（少例可以后续增加）
      page内需要有背景图，主内容，评论等，除了主内容，背景图和评论都可以没有
    -->
    <div class="pattern-center-blank"></div>
    <!-- page背景 -->
    <page-background v-if="content.isBack"/>
    <!-- 主内容 -->
    <page-content :pageData="content"/>
    <!-- 评论 -->
    <page-section v-if="content.isSection"/>
  </div>
</template>

<script>
import PageBackground from "@/views/PageBackground";
import PageContent from "@/views/PageContent";
import PageSection from "@/views/PageSection";
import { article as articleApi } from "@/api/article";
import { api } from "@/api/common";
export default {
  name: "Page",
  components: {
    PageBackground,
    PageContent,
    PageSection
  },
  beforeRouteEnter(to, from, next) {
    // 跳转页面模式
    api(to.path).then(res => {
      if(res.code !== 0) {  
        next(res.data.redirect ? res.data.redirect : '/404');
      }
      to.meta.title = res.data.title ? res.data.title : "";
      next(vm => vm.setData(res));
    }).catch(error => {
      next("/404");
    });
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    setData(res) {
      this.content = res.data;
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
  &::before,
  &::after {
    content: "";
    display: table;
    table-layout: fixed;
    clear: both;
  }
}
.pattern-center-blank {
    padding-top: 75px;
    background-color: #fff;
}
</style>
