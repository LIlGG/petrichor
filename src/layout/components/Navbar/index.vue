<!-- 
    petrichor 通用组件 - 导航栏
 -->
<template>
  <header class="site-header no-select is-homepage gizle" :class="[{sabit: isTop}, {yya: !isTop}]">
    <div class="site-top">
      <div class="site-branding">
        <logo :logo="logoInfo"></logo>
      </div>
      <div class="lower-cantiner">
        <menu>
          <nav-item></nav-item>
        </menu>
      </div>
      <div class="header-user-avatar">
        <login></login>
      </div>
      <div class="searchbox">
        <search></search>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "Navbar",
  components: { Logo },
  computed: {
    logoInfo() {
      return {
        url: "",
        title: "深巷里的黑猫",
        sakuraso: "深い路地",
        no: "の",
        shironeko: "黑猫"
      };
    },
    isTop() {
      let scrollY = this.$store.getters.scrollY;
      if (scrollY != 0) {
        return false;
      }
      return true;
    }
  }
};
</script>