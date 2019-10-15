<template>
    <div></div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data(){
      return {}
  },
  mounted() {
      console.log(this.item)
  }
};
</script>

<style scoped>
</style>
