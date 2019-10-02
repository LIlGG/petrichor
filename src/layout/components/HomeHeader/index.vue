<template>
    <div>
        <div v-if="banner" v-for="(value, index) in banner" :key="index" :id="bannerId(index)"></div>
        <center-b-g id="centerbg" class="centerbg" :style="curHeight"/>
    </div>
</template>

<script>
import CenterBG from "./CenterBG";
export default {
  name: "HomeHeader",
  props: ["banner"],
  components: {
    CenterBG
  },
  methods: {
    bannerId(index) {
      return "banner_wave_" + ++index;
    }
  },
  computed: {
    curHeight() {
      let clientHeight = this.$store.getters.clientHeight;
      return "height: " + clientHeight + "px";
    }
  }
};
</script>
