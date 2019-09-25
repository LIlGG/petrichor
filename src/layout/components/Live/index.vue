<template>
  <div class="live">
    <div class="live2d-panel">
      <dialogue v-if="isDialogue" :customDialogue="customDialogue" ref="dialogue"></dialogue>
      <live2d v-if="islive2d" :modelPath="modelPath" ref="l2dMange"></live2d>
    </div>
    <div class="tools-panel">
      <live2dTools
        v-for="(item,index) in toolsData"
        :key="index"
        v-show="item.show"
        @click="toolsClick(item)"
        :width="item.width"
        :toolsID="item.tabMsg"
        :tabMsg="item.tabMsg"
        :customDialogue="item.customDialogue"
        :backgroundColor="item.backgroundColor"
        :toolsStyle="item.toolsStyle"
        ref="tool"
      ></live2dTools>
    </div>
  </div>
</template>

<script>
import custom from "./custom";
import dialogue from "./Dialogue";
import live2d from "./Live2D";
import live2dTools from "./Live2DTools";
export default {
  name:"live",
  components: {
    dialogue,
    live2d,
    live2dTools
  },
  data() {
    return {
      modelPath: "",
      customDialogue: custom,
      toolsData: [
        // {tabMsg:'home',backgroundColor:'#ff0', show:true},
        // {tabMsg:'dialogue', width: 280, customDialogue: custom, show:true},
        {
          tabMsg: "Hide",
          backgroundColor: "#eed099",
          show: true,
          width: 35,
          toolsStyle: {
            "font-weight": 700,
            "font-size": "13px",
            color: "#ffffff"
          }
        },
        {
          tabMsg: "Change",
          backgroundColor: "orange",
          show: true,
          width: 35,
          toolsStyle: {
            "font-weight": 700,
            "font-size": "13px",
            color: "#ffffff"
          }
        },
        {
          tabMsg: "Save",
          backgroundColor: "#f7bb4d",
          show: true,
          width: 35,
          toolsStyle: {
            "font-weight": 700,
            "font-size": "13px",
            color: "#ffffff"
          }
        }
        // {tabMsg:'about',backgroundColor:'#eb7a77', show:true},
      ],
      islive2d: true,
      isDialogue: true
    };
  },
  mounted() {
    setInterval(() => {
      fetch("https://api.shino.cc/hitokoto/?encode=json")
        .then(res => res.json())
        .then(data => {
          if (!this.isDialogue) {
            let tool = this.$refs.tool.filter(item => {
              return item.customDialogue;
            });
            if (tool && tool.length > 0) tool[0].showMessage(data.hitokoto);
          } else {
            this.$refs.dialogue.showMessage(data.hitokoto);
          }
        });
    }, 20000);
    this.modelPath = "http://live2d.lixingyong.com/live2d/Pio/appv3.json";
  },
  methods: {
    toolsClick(item) {
      switch (item.tabMsg) {
        case "Change":
          this.$refs.l2dMange.initL2dMange(
            "http://live2d.lixingyong.com/live2d/Pio/appv3.json"
          );
          // this.modelPath = 'http://127.0.0.1:8000/media/static/live2d/Pio/model.json'
          break;
        case "Save":
          window.Live2D.captureName = `live2d-${Date.now()}.png`;
          window.Live2D.captureFrame = true;
          break;
        case "About":
          window.open("https://github.com/LingHanChuJian/live2d-vue");
          break;
        case "Hide":
          this.islive2d = false;
          this.isDialogue = false;
          this.toolsDisplay("Hide");
          break;
        case "Show":
          this.islive2d = true;
          this.isDialogue = true;
          this.toolsDisplay("Show");
          break;
      }
    },
    toolsDisplay(display) {
      for (let i = 0, len = this.toolsData.length; i < len; i++) {
        let tabMsg = this.toolsData[i].tabMsg;
        if (display === "Hide") {
          if (tabMsg === "Home" || tabMsg === "About") continue;
          this.toolsData[i].show = false;
          if (tabMsg === "Hide") {
            this.toolsData[i].show = true;
            this.toolsData[i].tabMsg = "Show";
          }
        } else {
          this.toolsData[i].show = true;
          if (tabMsg === "Show") this.toolsData[i].tabMsg = "Hide";
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.live {
  position: relative;
}

.tools-panel {
  position: fixed;
  left: 0;
  bottom: 0;
  max-width: 32px;
  z-index: 99;
  margin-left: -5px;
}
.live2d-panel {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  font-size: 0;
}
</style>
