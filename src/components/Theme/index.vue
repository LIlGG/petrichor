<template>
    <div class="changeSkin-gear" :style="themeStyle">
        <div>
            <div class="keys">
                <span id="open-skinMenu">
                    切换主题 | SCHEME TOOL
                    <icon :icon-class="iclass"/>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "components/Icon";
export default {
  name: "theme",
  components: {
    Icon
  },
  data() {
    return {
      iclass: ['iconfont',"icon-gear", "inline-block", "rotating"],
      styleObject: {
          background: 'none',
          visibility: 'visible',
          bottom: '-999px'
      },
    };
  },
  computed: {
    themeStyle() {
      let scrollY = this.$store.getters.scrollY;
      let clientHeight = this.$store.getters.clientHeight;
      if (scrollY / clientHeight > 0.05) {
        this.styleObject.bottom = "0px";
      } else {
        this.styleObject.bottom = "-999px";
      }
      return this.styleObject;
    }
  }
};
</script>
