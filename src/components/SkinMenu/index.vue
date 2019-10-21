<template>
  <div class="skin-menu">
    <div class="theme-controls row-container">
      <ul class="menu-list">
        <li v-for="(item,index) in menus" :key="index" :id="item.id" @click="changeTheme(item)">
          <icon :icon-class="item.icon" aria-hidden="true"/>
        </li>
      </ul>
    </div>
    <div class="font-family-controls row-container"></div>
  </div>
</template>

<script>
import Icon from "components/Icon";
export default {
  components: {
    Icon
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    }
  },
  data() {
    return {
      menus: [
        {
          id: "white-bg",
          icon: ["fa", "fa-television"],
          url: "",
          isDefault: true, //是否为默认主题
          skinSecter: false, // 
          isNight: false, // 是否为夜晚模式
          isSakura: false, // 是否为樱花
          isBanner: true, // 是否显示底部波浪动画
        },
        {
          id: "sakura-bg",
          icon: ["iconfont", "icon-sakura"],
          url: "https://view.moezx.cc/images/2018/01/03/sakura.png",
          skinSecter: true,
          isNight: false,
          isSakura: true,
          isBanner: false
        },
        {
          id: "gribs-bg",
          icon: ["fa", "fa-slack"],
          url: "https://view.moezx.cc/images/2018/01/03/plaid2dbf8.jpg",
          skinSecter: true,
          isNight: false,
          isSakura: true,
          isBanner: false
        },
        {
          id: "KAdots-bg",
          icon: ["iconfont", "icon-dots"],
          url: "https://view.moezx.cc/images/2018/01/24/kyotoanimation.png",
          skinSecter: true,
          isNight: false,
          isSakura: true,
          isBanner: false
        },
        {
          id: "totem-bg",
          icon: ["fa", "fa-optin-monster"],
          url: "https://view.moezx.cc/images/2018/09/17/little-monster.png",
          skinSecter: true,
          isNight: false,
          isSakura: true,
          isBanner: false
        },
        {
          id: "pixiv-bg",
          icon: ["iconfont", "icon-pixiv"],
          url: "https://view.moezx.cc/images/2018/01/10/star02.png",
          skinSecter: true,
          isNight: false,
          isSakura: true,
          isBanner: false
        },
        {
          id: "bing-bg",
          icon: ["iconfont", "icon-bing"],
          url: "https://api.shino.cc/bing/",
          skinSecter: true,
          isNight: true,
          isSakura: true,
          isBanner: false
        },
        {
          id: "dark-bg",
          icon: ["fa", "fa-moon-o"],
          url:
            "https://cdn.lixingyong.com/other-sites/api-index/images/me.png",
          skinSecter: true,
          isNight: true,
          isSakura: true,
          isBanner: false
        }
      ]
    };
  },
  methods: {
    changeTheme(themeItem) {
      this.$store.dispatch("setting/setTheme", themeItem);
    }
  }
};
</script>
<style lang="less" scoped>
.skin-menu {
  position: fixed;
  bottom: 50px;
  right: 10px;
  height: auto;
  width: 220px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
  z-index: 99;
  font-family: "Ubuntu", sans-serif;
  transform: scaleX(0);
  transition-duration: 0.3s, 0.3s;
  &.show {
    transform: scaleX(1);
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent;
  }
  .row-container {
    height: auto;
    margin: 0;
    padding: 0;
    text-align: center;
    .menu-list {
      display: block;
      text-align: center;
      padding: 0;
      margin: 10px auto;
      li {
        display: inline-block;
        margin: 6px;
        line-height: 36px;
        width: 36px;
        background-color: #f5f5f5;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          background-color: #fc3;
          color: #fff;
        }
      }
    }
    &.font-family-controls {
      padding: 3px 12px 16px;
      button {
        display: inline-block;
        border-style: none;
        border-radius: 5px;
        padding: 5px;
        height: 40px;
        width: calc(50% - 10px);
        font-size: 15px;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        margin: 0 4px;
        box-shadow: none;
        background-color: #f5f5f5;
        cursor: pointer;
        &.selected {
          background-color: #fc3;
          color: #fff;
        }
      }
    }
  }
}
</style>
