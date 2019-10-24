<!-- 全局布局 -->
<template>
    <section id="main-container">
        <!-- 头部(home) -->
        <HomeHeader :banner="banner" class="headertop filter-dot" style="height: auto"></HomeHeader>
        <!-- 头部（非Home) -->
        <!-- 页面主体 -->
        <slot></slot>
        <!-- 页脚 -->
        <footer></footer>
    </section>
</template>

<script>
import  HomeHeader  from "../HomeHeader";
export default {
  name: "Container",
  components: {
      HomeHeader
  },
  data() {
      return {
          banner: ["1","2"]
      }
  }
};
</script>
<style lang="less">
.centerbg {
	background-image: url("https://api.2heng.xin/cover/");
	background-position: center center;
	background-attachment: inherit;
}

</style>
