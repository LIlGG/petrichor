<template>
    <div class="top-feature-row">
        <h1 class="fes-title" style="font-family: 'Ubuntu', sans-serif;">
            <i class="fa fa-anchor" aria-hidden="true"></i>
            {{feature.title}}
        </h1>
        <div
            class="top-feature-v2"
            v-for="(item,index) in feature.featureList"
            :key="index"
            :style="featureStyle(index)"
        >
            <div class="the-feature square from_left_and_right">
                <router-link :to="item.link">
                    <div class="img">
                        <img :src="item.img">
                    </div>
                    <div class="info">
                        <h3>{{item.title}}</h3>
                        <p>{{item.description}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "feature",
  props: {
    feature: {
      type: Object,
      default: {}
    }
  },
  methods: {
    featureStyle(index) {
      if (index == 1) {
        return "margin: 0 4.5px;";
      }
      return "";
    }
  }
};
</script>
<style lang="less">
.top-feature-row {
  width: 100%;
  height: auto;
  margin-top: 55px;
}
h1.fes-title,
h1.main-title {
  color: #666;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 5px;
  margin-bottom: 30px;
  border-bottom: 1px dashed #ececec;
}
.top-feature-v2 {
  display: inline-block;
}
.the-feature,
.the-feature * {
  box-sizing: border-box;
}
.the-feature {
  position: relative;
  transition: all 0.35s ease-in-out;

  a {
    display: block;
    color: #333;
    &:hover {
      text-decoration: none;
    }
  }
  img {
    height: 160px;
    width: 257px;
  }
}
.the-feature.from_left_and_right {
  position: relative;
  height: 160px;
  width: 253px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 10px;
  .img {
    transition: all 0.35s ease-in-out;
    transform: scale(1);
  }
  .info {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    backface-visibility: hidden;
    background: #333;
    background: rgba(0, 0, 0, 0.6);
    visibility: hidden;
    opacity: 0;
    transition: all 0.35s ease-in-out;
    h3 {
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      font-size: 17px;
      padding: 10px;
      background: #111;
      margin: 30px 0 0 0;
      transition: all 0.35s ease-in-out;
      transform: translateX(-100%);
    }
    p {
      font-style: italic;
      font-size: 12px;
      position: relative;
      color: #bbb;
      padding: 20px 20px 20px;
      text-align: center;
      transition: all 0.35s 0.1s linear;
      transform: translateX(100%);
    }
  }

  a {
    &:hover {
      .img {
        transform: scale(1.2);
      }
      .info {
        visibility: visible;
        opacity: 1;
        h3,
        p {
          transform: translateX(0);
        }
      }
    }
  }
}
</style>

