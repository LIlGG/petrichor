<template>
  <div ref="aplayer"></div>
</template>

<script>
import APlayer from "aplayer";
import $ from "jquery";
import { music } from "@/api/music";
import { Promise } from "q";

export default {
  name: "APlayer",
  props: ["option", "musics"],
  data() {
    return {
      aplayerOptions: {
        lrcType: 3,
        fixed: true,
        listFolded: false,
        order: "random",
        autoplay: false
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.option, this.musics)
      if (this.option) {
        this.aplayerOptions = Object.assign(
          {},
          this.aplayerOptions,
          this.option
        );
      }
  
      if (this.musics) {
        this.getMusic(this.musics);
      }
    },
    getMusic(musics) {
      // 假设获取歌单
      music(musics).then(response => {
        this.$set(this.aplayerOptions, "audio", response);
        this.renderAplayer()
      });
    },
    renderAplayer() {
      if (this.aplayerOptions.audio) {
        this.aplayerOptions.container = this.$refs.aplayer;
        let ap = new APlayer(this.aplayerOptions);
        ap.lrc.hide(); // 隐藏歌词
        ap.on("play", () => this.lrcShow(ap));
        // 由于是第三方插件，因此使用jquery来处理（可能还会有更好的办法）
        $(this.$refs.aplayer)
          .find(".aplayer-miniswitcher")
          .bind("click", () => this.listshow(ap));
        $(this.$refs.aplayer)
          .find(".aplayer-body")
          .addClass("ap-hover");
      }
    },
    lrcShow(ap) {
      ap.lrc.show();
    },
    listshow(ap) {
      this.lrcShow(ap);
      $(this.$refs.aplayer)
        .find(".aplayer-body")
        .toggleClass("ap-hover");
    }
  }
};
</script>
