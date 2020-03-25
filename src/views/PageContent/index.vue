<!-- 主内容展示，主要用于根据后台传入的内容，动态展示不同的组件 -->
<template>
	<div id="content" class="site-content">
		<!-- 以下内容会根据后台传值不同，动态引入不同的组件 -->
		<keep-alive>
			<component :is="curContent" :conData="content"></component>
		</keep-alive>
	</div>
</template>

<script>
import { HomeContent } from "@/content";
export default {
  name: "PageContent",
  components: {
    HomeContent
  },
  props: {
    pageData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      content: this.pageData.content
    }
  },
  computed: {
    curContent: function() {
      return this.pageData.contentPage ? this.pageData.contentPage : "homeContent";
    }
  }
};
</script>
<style lang="less">
#content {
  animation: main 1s;
}
</style>

