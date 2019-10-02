<template>
    <h1 class="glitch Ubuntu-font" v-if="isglitch" :data-text="glitchText">
        {{glitchText}}
    </h1>
</template>

<script>
import '@/styles/layout/glitch.less'

export default {
    name: 'Glitch',
    props: ['glitchText','isglitch']
}
</script>