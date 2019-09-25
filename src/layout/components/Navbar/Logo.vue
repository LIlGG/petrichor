<template>
  <div class="site-branding">
    <span class="site-title">
      <span class="logolink moe-mashiro">
        <a :href="logo.url" :alt="logo.title">
          <ruby>
            <span class="sakuraso">{{logo.sakuraso}}</span>
            <span class="no">{{logo.no}}</span>
            <span class="shironeko">{{logo.shironeko}}</span>
            <rp></rp>
            <rt class="chinese-font">{{logo.title}}</rt>
            <rp></rp>
          </ruby>
        </a>
      </span>
    </span>
  </div>
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

<style lang="less" scoped>

.site-branding {
  animation: sitetop 1s;
  float: left;
  position: relative;
  height: 75px;
  line-height: 75px;
  margin-left: -6px;
  .site-title {
    margin: 0;
    a {
      color: #464646;
      font-weight: 400;
      &:hover {
        color: orange !important;
      }
    }

    img {
      height: 40px;
      margin-top: 17px;
      opacity: 0.75;
      -webkit-transition: color 0.2s ease-out, border 0.2s ease-out,
        opacity 0.2s ease-out;
      -moz-transition: color 0.2s ease-out, border 0.2s ease-out,
        opacity 0.2s ease-out;
      transition: color 0.2s ease-out, border 0.2s ease-out,
        opacity 0.2s ease-out;
      &:hover {
        opacity: 1;
      }
    }

    .logolink {
      &.moe-mashiro {
        a {
          color: #464646;
          float: left;
          font-size: 25px;
          font-weight: 800;
          height: 56px;
          line-height: 56px;
          padding-left: 6px;
          padding-right: 15px;
          padding-top: 11px;
          text-decoration-line: none;
        }

        .sakuraso,
        .no {
          font-size: 25px;
          border-radius: 9px;
          padding-bottom: 2px;
          padding-top: 5px;
        }

        .no {
          display: inline-block;
          margin-left: 5px;
        }
      }

      a {
        color: #464646;
        float: left;
        font-size: 20px;
        font-weight: 800;
        height: 56px;
        line-height: 56px;
        padding-left: 35px;
        padding-right: 15px;
        padding-top: 11px;
        text-decoration-line: none;
        &:hover {
          .sakuraso {
            background-color: orange;
            color: #fff;
          }

          .shironeko,
          rt {
            color: orange;
          }

          .no {
            -webkit-animation: spin 1.5s linear infinite;
            animation: spin 1.5s linear infinite;
          }

          ruby {
            rt {
              opacity: 1;
            }
          }
        }
      }

      .sakuraso {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        color: #464646;
        height: auto;
        line-height: 25px;
        margin-right: 0;
        padding-bottom: 0;
        padding-top: 1px;
        text-size-adjust: 100%;
        width: auto;
      }

      ruby {
        ruby-position: under;
        -webkit-ruby-position: after;
        rt {
          font-size: 10px;
          transform: translateY(-15px);
          opacity: 0;
          transition-property: opacity;
          transition-duration: 0.5s, 0.5s;
        }
      }
    }
  }
}

@media (max-width: 860px) {
  .site-branding {
    float: right;
    height: 50px;
    line-height: 43px;
    margin-right: -6px;
    .site-title {
      font-size: 20px;
      margin-right: 10px;
      img {
        height: 40px;
        line-height: 40px;
        margin: 0;
        vertical-align: middle;
      }
    }
  }
}

.moe-mashiro {
  font-family: "Moe-Mashiro", "Merriweather Sans", Helvetica, Tahoma, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", "WenQuanYi Micro Hei",
    sans-serif;
}
</style>
