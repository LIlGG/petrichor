<template>
    <a :href="likeData.likeHref" target="_blank" :class="likeData.likeClass" :title="likeData.title" @click="clickEvent">
        <img :src="likeData.imgSrc">
    </a>
</template>

<script>
export default {
    name: 'social',
    props: [
        'likeData',
    ],
    methods: {
        clickEvent() {
            this.$emit('clickEvent', this.likeData.title);
        }
    }
}
</script>