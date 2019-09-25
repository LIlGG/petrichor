<!--
    一个小玩具，点击以后跳转至页面顶部,采用top隐藏，而不是show或者if
-->
<template>
    <a href="#" class="cd-top faa-float animated cd-is-visible" :class="{'cd-is-visible': isVisible}" :style="topStyle"></a>
</template>

<script>
export default {
    name: "CdTop",
    props:{
        scrollY: Number,
        required: true,
        default: 0
    },
    mounted () {
        
    },
    computed: {
        topStyle() {
            return ""
        },
    }
}
</script>

<style lang="less" scoped>

</style>
