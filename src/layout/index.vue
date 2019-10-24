<template>
  <section id="main-container">
    <!-- 头部(home) -->
    <homeheader :banner="banner" class="headertop filter-dot" style="height: auto"></homeheader>
    <!-- 头部（非Home) -->
    <!-- 页面主体 -->
    <slot></slot>
    <!-- 页脚 -->
    <dfooter></dfooter>
  </section>
</template>
<script>
import { HomeHeader, Footer } from "layout/components";
export default {
  name: 'Layout',
  components: {
    homeheader: HomeHeader,
    dfooter: Footer
  },
  data() {
    return {
      banner: ["1", "2"]
    };
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
