<template>
  <canvas class="live2d" :id="canvasID" :width="width" :height="height"></canvas>
</template>

<script>
import uuid from 'uuid'
import L2dManage from 'vendor/plugins/live2d/main'

export default {
  data:()=>({
    L2dManage: ''
  }),
  props:{
    width:{
      type: Number,
      default: 290
    },
    height:{
      type: Number,
      default: 240
    },
    canvasID:{
      type: String,
      default: uuid()
    },
    modelPath: String
  },
  mounted(){
    this.L2dManage = new L2dManage(document.getElementById(this.canvasID), this.modelPath)
  },
  methods:{
    initL2dMange(modelPath){
      this.L2dManage.revise(modelPath)
    }
  },
  watch:{
    modelPath(newPath){
      this.initL2dMange(newPath)
    }
  }
}
</script>

