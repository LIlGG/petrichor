<template>
  <div>
    <div
      v-if="banner"
      v-for="(value, index) in banner"
      :key="index"
      :id="bannerId(index)"
      :class="{'banner_wave_hide': isBgVideoPlay, 'banner_wave_hide_fit_skin': isBanner}"
    ></div>
    <center-b-g id="centerbg" class="centerbg" :style="curHeight"/>
    <video-b-g id="video-container" ref="videoBG"/>
    <div class="headertop-down faa-float animated" @click="headertopDown()">
      <span>
        <i class="fa fa-chevron-down"></i>
      </span>
    </div>
  </div>
</template>

<script>

import CenterBG from "./CenterBG";
import VideoBG from './VideoBG'
import $ from 'jquery';
export default {
  name: "HomeHeader",
  props: ["banner"],
  components: {
    CenterBG,
    VideoBG
  },
  methods: {
    bannerId(index) {
      return "banner_wave_" + ++index;
    },
    headertopDown() {
      let clientHeight = this.$store.getters.clientHeight;
      $("html,body").animate({ scrollTop: clientHeight }, 600);
    }
  },
  computed: {
    curHeight() {
      let clientHeight = this.$store.getters.clientHeight;
      return "height: " + clientHeight + "px";
    },
    isBgVideoPlay() { // 与音频播放有关
      return this.$store.getters.bgVideoPlay;
    },
    isBanner() { // 是否隐藏（与主题有关）
      return !this.$store.getters.theme.isBanner;
    }
  }
};
</script>
