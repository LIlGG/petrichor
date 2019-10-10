<template>
    <div>
        <p>{{tips}}</p>
        <icon :icon-class="iclass"/>
        <slot></slot>
    </div>
</template>

<script>
import Icon from 'components/Icon'
export default {
    name: 'search',
    components: {
        Icon
    },
    props: {
      tips: String,
      iclass: {
        Object,
        required: false,
         default: function () {
            return ['iconfont', 'icon-search']
        }
      }
    },
}
</script>