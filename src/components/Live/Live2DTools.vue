<template>
  <a>
    <transition name="el-fade-in-linear">
      <div class="live2d-tools" :id="toolsID" :style="toolsStyle" v-on="toolsListeners">
        <slot>{{ tabMsg }}</slot>
      </div>
    </transition>
  </a>
</template>

<script>
import uuid from "uuid";
import tools from "vendor/plugins/live2d/tools";

export default {
  name: "tools",
  data: () => ({
    live2dTools: ""
  }),
  props: {
    width: {
      type: Number,
      default: 28
    },
    minWidth: {
      typr: Number,
      default: 18
    },
    position: {
      type: String,
      default: "left"
    },
    customDialogue: Object,
    toolsID: {
      type: String,
      default: uuid()
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    toolsStyle: Object,
    tabMsg: String
  },
  mounted() {
    this.live2dTools = new tools(
      document.getElementById(this.toolsID),
      this.minWidth,
      this.width,
      this.position,
      this.backgroundColor,
      this.customDialogue
    );
  },
  methods: {
    showMessage(remark, time = 5000) {
      this.live2dTools.showMessage(remark);
      this.live2dTools.hideMessage(time);
    }
  },
  computed: {
    toolsListeners() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        click(event) {
          vm.$emit("click", event);
        }
      });
    }
  }
};
</script>