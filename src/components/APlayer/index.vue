<template>
  <div ref="aplayer"></div>
</template>

<script>
import APlayer from "aplayer";
import $ from 'jquery';
export default {
  name:"APlayer",
  props: ["options"],
  watch: {
    options(newValue, oldValue) {
      if(this.options.audio) {
        this.options.container= this.$refs.aplayer
        let ap = new APlayer(this.options);
        ap.lrc.hide(); // 隐藏歌词
        ap.on('play',  () => this.lrcShow(ap));
        // 由于是第三方插件，因此使用jquery来处理（可能还会有更好的办法）
        $(this.$refs.aplayer).find(".aplayer-miniswitcher").bind('click', () => this.listshow(ap))
        $(this.$refs.aplayer).find(".aplayer-body").addClass("ap-hover");
      }
    }
  },
  methods: {
    lrcShow(ap) {
      ap.lrc.show();
    },
    listshow(ap) {
      this.lrcShow(ap);
      $(this.$refs.aplayer).find(".aplayer-body").toggleClass("ap-hover");
    }
  },
};
</script>
