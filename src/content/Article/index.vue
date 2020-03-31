<template>
  <div>
		<div class="content-area">
			<main class="site-main" role="main">
				<con :thumb="thumb"/>
			</main>
		</div>
	</div>
</template>

<script>
import Con from "@/tpl/articleDetailContent";
export default {
	name: "ArticleContent",
	components: {
    Con
	},
	props: {
    conData: {
      type: Object,
      default: {}
    }
	},
	computed: {
    thumb: function() {
      return this.conData.thumb;
    }
  },
}
</script>

<style>
.site-main {
	padding: 40px 0 0;
}
</style>
