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

.site-top {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  .lower-cantiner {
    position: absolute;
    left: 50%;
    min-width: 758.4px;
    pointer-events: none;
  }
  .lower {
    display: inline-block;
    margin: 15px 0 0 10px;
    font-size: 16px;
    position: relative;
    left: -50%;
    pointer-events: auto !important;
    nav {
      position: relative;
      float: right;
      display: none;
      animation: searchbox 0.2s;
      &.navbar {
        display: block;
      }
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    li {
      float: left;
      margin: 0 13px;
      position: relative;
      -webkit-transtition: all 1s ease;
      a {
        padding: 10px 0;
        display: inline-block;
        color: #666;
        &:hover {
          color: orange;
          &:after {
            max-width: 100%;
          }
        }
        &:after {
          content: "";
          display: block;
          position: absolute;
          bottom: -16px;
          height: 6px;
          background-color: #fe9600;
          width: 100%;
          max-width: 0;
          transition: max-width 0.25s ease-in-out;
        }
      }

      ul {
        li {
          a {
            &:hover {
              content: "";
              display: none;
              position: absolute;
              bottom: -21px;
              height: 6px;
              background-color: #fe9600;
              width: 100%;
              max-width: 0;
              transition: max-width 0.25s ease-in-out;
            }
          }
        }
      }
    }
  }

  .menu-item-has-children {
    li {
      a {
        font-size: 14px;
        padding: 8px 18px;
        text-transform: none;
        color: #545454;
      }
    }
  }
}

.site-branding {
  animation: sitetop 1s;
  float: left;
  position: relative;
  height: 75px;
  line-height: 75px;
  margin-left: -6px;
}

@media (max-width: 1200px) {
  .site-top .lower {
    left: 15px;
    .lower-cantiner {
      left: 0;
    }
    nav {
      &.hide {
        display: none !important;
      }
    }
  }
}

@media (max-width: 860px) {
  .site-top {
    .lower {
      nav {
        ul {
          li {
            .animated-hover {
              i {
                display: inline;
              }
            }
          }
        }
      }
    }
  }
  .site-branding {
    float: right;
    height: 50px;
    line-height: 43px;
    margin-right: -6px;
  }
}
</style>
