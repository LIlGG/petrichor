<!--
  封装的回到顶部小工具
-->
<template>
    <a
        href="#"
        class="cd-top animated cd-is-visible"
        :class="{'cd-is-visible': visible}"
        :style="topStyle"
    ></a>
</template>

<script>
export default {
  data() {
      return {
        visible: false
      }
  },
  computed: {
    topStyle() {
      let scrollY = this.$store.getters.scrollY;
      let clientHeight = this.$store.getters.clientHeight;
      let top = 900;
      if (scrollY / clientHeight > 0.05) {
        top = 950 - clientHeight;
        this.visible = true
      } else {
        this.visible = false
      }
      return "top: -" + top + "px";
    }
  }
};
</script>

<style lang="less" scoped>
.cd-top {
  position: fixed;
  right: 25px;
  top: -900px;
  z-index: 99;
  width: 70px;
  height: 900px;
  background: url(https://cdn.lixingyong.com/img/Sakura/images/scroll.png)
    no-repeat center;
  background-size: contain;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  cursor: url(https://cdn.lixingyong.com/img/Sakura/cursor/No_Disponible.cur),
    auto;
  opacity: 1;
  &.cd-is-visible {
    opacity: 1;
    top: -326px;
  }
  &.cd-fade-out {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }

  span {
    display: none;
    color: #000;
    position: absolute;
    bottom: 0;
    height: 20px;
    width: 50px;
    text-align: center;
  }

  @media screen and (max-width: 860px) {
    .cd-top {
      display: none;
      height: 60px;
      width: 50px;
    }

    .cd-top span {
      height: 10px;
      width: 50px;
    }
  }
}
</style>
