<!-- 
博客内容页面主题（必须具有高复用性,因此大部分内容选择后台获取。之后缓存）
为了方便起见，我先自己预定义一个最基本的模板，剩余的模板均使用后台进行读取
当前界面只实现最基本的功能，如翻页，展示等，具体功能视后台html而定
【后续考虑之后，决定对于每个单独的页面设置一个不同的page，这样比较方便】
【大部分界面都会经过page.vue界面,当前页面只控制大致的样式以及获取后台内容并进行内容分发（分隔不同的内容，
  例如背景图数据，主内容数据，评论数据的分发）】
 -->
<template>
  <div id="page" class="site wrapper">
    <!-- 
      最外层为统一的界面，所有的界面大致上都需要经过此页面（少例可以后续增加）
      page内需要有背景图，主内容，评论等，除了主内容，背景图和评论都可以没有
    -->
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
export default {
  components: {
    PageBackground,
    PageContent,
    PageSection
  },
  data() {
    return {
      content: {
        isBack: false,
        isSection: false,
        contentPage: "homeContent",
        content: {
          feature: {
            title: " START:DASH!!",
            featureList: [
              {
                link: "/theme-sakura",
                img:
                  "https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.2/img/other/sakura.md.png",
                title: "Sakura",
                description: "本站 WordPress 主题"
              },
              {
                link: "/theme-sakura",
                img:
                  "https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.6/img/other/th%20(3).jpg",
                title: "Pixiv",
                description: "P 站的正确打开方式"
              },
              {
                link: "/theme-sakura",
                img:
                  "https://view.moezx.cc/images/2019/06/11/74751807_angel.jpg",
                title: "明日方舟",
                description: "游戏主界面 H5 复刻"
              }
            ]
          },
          thumbList: [
            {
              link: "/2019/06/04/pil-merge-of-two-images-with-alpha-channels",
              img:
                "https://static.2heng.xin/wp-content/uploads//2019/06/74857125_p0.png",
              time: "2019-10-30 12:00:00",
              isSticky: true,
              title: "PIL 合并 RGB 通道图与 Alpha 通道图",
              views: 7153,
              comments: 26,
              categoryLink: "#",
              categoryName: "无",
              theExcerpt:
                "明日方舟拆包以后发现立绘被分成了两张图，一个储存的是 RGB 通道的信息，另一个储存的是 Alpha 通道的信息（实际还"
            }
          ],
          curPage: 1,
          total: 3,
          pageSize: 10
        }
      }
    };
  },
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
</style>
