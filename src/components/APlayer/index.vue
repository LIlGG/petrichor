<template>
  <div ref="aplayer"></div>
</template>

<script>
import APlayer from "aplayer";
export default {
  name:"APlayer",
  props: ["options"],
  data() {
      return {
        ap: ""
    }
  },
  watch: {
    options(newValue, oldValue) {
      if(this.options.audio) {
        this.options.container= this.$refs.aplayer
        this.ap = new APlayer(this.options);
      }
    }
  }
};
</script>
