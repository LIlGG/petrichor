<template>
  <figure>
    <div class="focusinfo no-select" :style="isHide">
      <glitch class="center-text" :glitchText="glitchText" :isglitch="isglitch"/>
      <div class="header-info">
        <p>
          <i class="fa fa-quote-left"></i>
          {{headerInfo}}
          <i class="fa fa-quote-right"></i>
        </p>
        <div class="top-social_v2">
          <li id="bg-pre">
            <img class="flipx" :src="nextImg">
          </li>
          <li v-for="(social, index) in socials" :key="index">
            <LikeIcon :likeData="social" @clickEvent="likeClickEvent"/>
          </li>
          <li id="bg-next">
            <img :src="nextImg">
          </li>
        </div>
      </div>
    </div>
  </figure>
</template>

<script>
import Glitch from "components/Glitch";
import LikeIcon from "components/LikeIcon";
export default {
  name: "CenterBG",
  components: {
    Glitch,
    LikeIcon
  },
  computed: {
    isHide() {
      let bgVideoPlay = this.$store.getters.bgVideoPlay;
      if(bgVideoPlay) {
        return 'top: -999px';
      }
      return '';
    }
  },
  data() {
    return {
      isglitch: true,
      glitchText: "Hi, Mashiro!",
      headerInfo:
        " You got to put the past behind you before you can move on. ",
      socials: [
        {
          likeHref: "https://github.com/LIlGG",
          likeClass: "social-github",
          title: "github",
          imgSrc:
            "https://cdn.lixingyong.com/img/Sakura/images/sns/github.png"
        },
        {
          likeHref: "https://music.163.com/#/user/home?id=1541792990",
          likeClass: "social-cloudMusic",
          title: "CloudMusic",
          imgSrc:
            "https://cdn.lixingyong.com/img/Sakura/images/sns/wangyiyun.png"
        },
        {
          likeHref: "https://www.zhihu.com/people/ju-zi-57-6-28/activities",
          likeClass: "social-zhihu",
          title: "Zhihu",
          imgSrc:
            "https://cdn.lixingyong.com/img/Sakura/images/sns/zhihu.png"
        },
        {
          likeClass: "social-email",
          title: "E-mail",
          imgSrc:
            "https://cdn.lixingyong.com/img/Sakura/images/sns/email.svg"
        }
      ],
      nextImg:
        "https://cdn.lixingyong.com/img/Sakura/images/next-b.svg"
    };
  },
  methods: {
    likeClickEvent(title) {
      switch (title) {
        case "E-mail":
          let mail =
            "mailto:" +
            this.$store.getters.emailDomain +
            "@" +
            this.$store.getters.emailName;
          window.open(mail);
          break;
      }
    }
  }
};
</script>