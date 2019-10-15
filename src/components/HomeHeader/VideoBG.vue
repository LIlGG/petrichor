<template>
  <div>
    <video
      width="auto"
      class="bgvideo video"
      :src="playerUrl"
      preload="auto"
      :style="currHeight"
      ref="bgvideo"
      autoplay="autoplay"
    ></video>
    <div id="video-btn" :class="{'video-play': !play, 'video-pause': play}" @click="videoBtn"></div>
    <div id="video-add"></div>
    <div class="video-stu" :style="{bottom: stuBottom}">{{stuName}}</div>
  </div>
</template>

<script>
import "@/styles/layout/video-bg.less";

export default {
  computed: {
    currHeight() {
      return "min-height: " + this.$store.getters.clientHeight + "px";
    },
    play() {
      return this.$store.getters.bgVideoPlay;
    }
  },
  data() {
    return {
      playerUrl: "",
      stuName: "",
      stuBottom: "-100px",
      isVideo: false
    };
  },
  mounted() {
    let video = this.$refs.bgvideo;
    video.onended = () => this.videoEnded();
  },
  methods: {
    videoBtn() {
      let video = this.$refs.bgvideo;
      if (video.paused) {
        //已经暂停则开始播放
        this.playerUrl =
          "https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.3//The Pet Girl of Sakurasou.mp4";
        this.$store.dispatch("app/setBgVideoPlay", true);
        this.playcallback(video);
        if (!this.isVideo) {
          // 首次加载
          this.firstLoad(video);
        }
      } else {
        this.$store.dispatch("app/setBgVideoPlay", false);
        video.pause();
        this.stuName = "已暂停 ...";
        this.stuBottom = "0px";
      }
    },
    firstLoad(video) {
      this.stuName = "视频加载中 ...";
      this.stuBottom = "0px";
      video.oncanplay = () => {
        this.stuBottom = "-100px";
        this.isVideo = true;
      };
    },
    playcallback(video) {
      this.$nextTick(() => {
        video.play();
      });
      this.stuBottom = "-100px";
    },
    videoEnded() {
      this.playerUrl = "";
      this.$store.dispatch("app/setBgVideoPlay", false);
      this.stuName = "已完成 ...";
      this.stuBottom = "-100px";
      this.isVideo = false;
    }
  }
};
</script>