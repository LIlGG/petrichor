<template>
  <div class="dialogue-live2d" :id="dialogueID" :style="dialogueStyle"></div>
</template>

<script>
import uuid from "uuid";
import dialogue from "vendor/plugins/live2d/dialogue";

export default {
  name: "dialogue",
  data: () => ({
    dialogueModul: ""
  }),
  props: {
    dialogueID: {
      type: String,
      default: uuid()
    },
    dialogueStyle: Object,
    customDialogue: Object
  },
  mounted() {
    this.dialogueModul = new dialogue(
      document.getElementById(this.dialogueID),
      this.customDialogue
    );
  },
  methods: {
    showMessage(remark, time = 5000) {
      this.dialogueModul
        .showMessage(remark, time)
        .then(() => this.dialogueModul.hideMessage(time));
    }
  }
};
</script>

