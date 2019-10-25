<template>
    <footer>
        <div id="colophon" class="site-footer">
            <div class="site-info">
                <div class="footertext">
                    <div class="img-preload">
                        <img v-for="(preload, index) in imgPreload" :key="index" :src="preload">
                    </div>
                    <p class="foo-logo" :style="fooLogo"></p>
                    <p :style="footInfo.font">
                        <span :style="footInfo.textStyle">
                            Crafted with
                            <i class="fa fa-heart animated" style="color: #e74c3c;"></i>
                            by
                            <a
                                style="color: #000000;text-decoration:none;"
                                href="#"
                            >{{footInfo.createdName}}</a>
                        </span>
                    </p>
                    <p>{{footInfo.des}}</p>
                    <p style="font-family: 'Ubuntu', sans-serif;">
                        <span style="color: #b9b9b9;">
                            Theme
                            <a
                                href="https://2heng.xin/theme-sakura/"
                                target="_blank"
                                style="color: #b9b9b9;;text-decoration: underline dotted rgba(0, 0, 0, .1);"
                            >Sakura</a>
                            <i
                                class="iconfont icon-sakura rotating"
                                style="color: #ffc0cb;display:inline-block"
                            ></i>by
                            <a
                                href="https://2heng.xin/"
                                target="_blank"
                                style="color: #b9b9b9;;text-decoration: underline dotted rgba(0, 0, 0, .1);"
                            >Mashiro</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      footInfo: {
        font: { 
            "font-family": "'Ubuntu', sans-serif"
        },
        textStyle: { 
            color : "#666666"
        },
        des : "© 2019 深巷里的黑猫 辽ICP备19006482号",
        createdName: "Mashiro"
      },
      imgPreload: [
        "https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/wordpress-rotating-ball-o.svg",
        "https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/disqus-preloader.svg"
      ],
      fooLogoImg:
        "https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sakura.svg"
    };
  },
  computed: {
    fooLogo() {
      return "background-image: url(" + this.fooLogoImg + ");";
    }
  }
};
</script>

<style>
</style>
