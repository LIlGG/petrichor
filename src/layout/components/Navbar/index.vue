<!-- 
    petrichor 通用组件 - 导航栏
 -->
<template>
    <header
        class="site-header no-select is-homepage gizle"
        :class="[{sabit: isTop}, {yya: !isTop}]"
    >
        <logo :logo="logoInfo"></logo>
        <menu>
            <nav-item></nav-item>
        </menu>
        <div></div>
        <div></div>
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
  },
};
</script>

<style lang='less' scoped>
.site-header {
  width: 100%;
  height: 75px;
  background: 0 0;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  position: fixed;
  z-index: 9999;
  top: 0;
  &.is-homepage {
    .lower-cantiner {
      display: none;
    }
    &.yya {
      .site-header {
        display: block;
      }
    }
    &:hover {
      &.is-homepage {
        .lower-cantiner {
          display: block;
        }
      }
    }
  }

  &:hover {
    background-color: #fff;
  }
}

.yya {
  position: fixed;
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
}

.gizle {
  top: -100px;
  top: 0;
  z-index: 9999;
}

.sabit {
  top: 0;
  z-index: 9999;
}
</style>
