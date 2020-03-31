<template>
	<div>
		<!-- 主内容前端装饰 -->
		<feature :feature="feature"/>
		<div class="content-area">
			<!-- #main -->
			<main id="main" class="site-main" role="main">
				<h1 class="main-title" style="font-family: 'Ubuntu', sans-serif;">
					<i class="fa fa-envira" aria-hidden="true"></i>
					Discovery
				</h1>
				<con v-for="(item, index) in thumb" :thumb="item" :key="index" :class="isLeft(index)"/>
			</main>
			<!-- 分页组件 -->
			<pager :curPage="curPage" :total="total" @setPage="gotoPage" ref="pager"/>
		</div>
	</div>
</template>
<script>
import Feature from "@/views/Feature";
import Con from "@/tpl/content";
import Pager from "components/Pager";
export default {
  name: "HomeContent",
  components: {
    Feature,
    Con,
    Pager
  },
  props: {
    conData: {
      type: Object,
      default: {}
    }
  },
  computed: {
    feature: function() {
      return this.conData.feature;
    },
    thumbList: function() {
      return this.conData.thumb;
    },
    curPage: function() {
      return this.conData.curPage;
    },
    total: function() {
      return this.conData.total;
    }
  },
  methods: {
    isLeft(index) {
      return { "post-list-thumb-left": index > 0 && index % 2 === 0 };
    },
    /**
     * 下一页
     */
    gotoPage() {
      // 模拟请求
      setTimeout(() => {
        this.curPage++;
      }, 3000);
    }
  }
};
</script>
