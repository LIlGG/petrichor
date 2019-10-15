<template>
  <span class="site-title">
    <span class="logolink moe-mashiro">
      <router-link to="/" :alt="logo.title">
        <ruby>
          <span class="sakuraso">{{logo.sakuraso}}</span>
          <span class="no">{{logo.no}}</span>
          <span class="shironeko">{{logo.shironeko}}</span>
          <rp></rp>
          <rt class="chinese-font">{{logo.title}}</rt>
          <rp></rp>
        </ruby>
      </router-link>
    </span>
  </span>
</template>

<script>
export default {
  name: "NavbarLogo",
  props: {
    logo: Object,
    required: true
  }
};
</script>
