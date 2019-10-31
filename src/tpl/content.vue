<template>
    <article class="post-list-thumb">
        <div class="post-thumb">
            <a :href="thumb.link" target="_blank">
                <img class="lazyload" :src="thumbImg">
            </a>
        </div>
        <div class="post-content-wrap">
            <div class="post-content">
                <div class="post-date">
                    <i class="iconfont icon-time"></i>
                    {{thumb.time | formatTime}}
                    <template v-if="thumb.isSticky">
                        &nbsp;
                        <i class="iconfont hotpost icon-hot"></i>
                    </template>
                </div>
                <a :href="thumb.link" class="post-title" target="_blank">
                    <h3>{{thumb.title}}</h3>
                </a>
                <div class="post-meta">
                    <span>
                        <i class="iconfont icon-attention"></i>
                        {{thumb.views | toThousandFilter}}热度
                    </span>
                    <span class="comments-number">
                        <i class="iconfont icon-mark"></i>
                        {{commentsPopupLink}}
                    </span>
                    <span>
                        <i class="iconfont icon-file"></i>
                        <a :href="thumb.categoryLink">{{thumb.categoryName}}</a>
                    </span>
                </div>
                <div class="float-content">
                    <p>{{thumb.theExcerpt}}</p>
                    <div class="post-bottom">
                        <a :href="thumb.link" class="button-normal">
                            <i class="iconfont icon-caidan"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
  name: "con",
  props: {
    thumb: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      defaultImage:
        "https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.1/img/svg/loader/orange.progress-bar-stripe-loader.svg"
    };
  },
  computed: {
    thumbImg() {
      return this.thumb.img || this.defaultImage;
    },
    commentsPopupLink() {
      return (this.thumb.comments > 1 ? this.thumb.comments : 1) + " 条评论";
    }
  },
  methods: {}
};
</script>

<style lang="less">
.post-list-thumb {
  float: left;
  width: 100%;
  height: 300px;
  position: relative;
  margin: 20px 0 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
  i {
    margin-right: 5px;
    color: #989898;
    font-size: 14px;
  }
  a {
    color: #504e4e;
  }

  .post-title {
    h3 {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      word-wrap: break-word;
    }
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

.post-list-thumb-left {
  .post-content-wrap {
    float: left;
    padding-left: 30px;
    padding-right: 0;
    text-align: right;
    margin: 20px 10px 10px 0;
  }
  .post-thumb {
    float: left;
    a {
      border-radius: 10px 0 0 10px;
    }
  }
}

.post-thumb {
  float: right;
  width: 55%;
  a {
    height: 300px;
    position: relative;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    border-radius: 0 10px 10px 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
      transition: all 0.6s;
    }
  }
}

.lazyload {
  filter: blur(0px);
  transition: 0.3s filter linear;
}

.lazyload[src*="#lazyload-blur"],
.lazyload[style*="#lazyload-blur"] {
  filter: blur(10px);
}

.post-content-wrap {
  position: relative;
  display: inline-block;
  float: right;
  padding-right: 30px;
  padding-left: 0;
  width: 40%;
  margin: 20px 10px 0;
}

.post-content a,
.float-content i {
  &:hover {
    color: #fe9600;
  }
}

.post-date,
.post-meta,
.post-meta a {
  color: #888;
  font-size: 12px;
}

.comments-number {
  margin: 0 10px;
}

.float-content {
  position: relative;
  width: 100%;
  right: 0;
  margin: 0;
  padding: 0;
  z-index: 50;
  color: rgba(0, 0, 0, 0.66);
  .post-text {
    display: inline-block;
    text-align: justify;
    font-size: 14px;
  }
  i {
    font-size: 25px;
    color: #666;
  }
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    height: 67.5px;
    overflow: hidden;
  }
}

i.iconfont.hotpost {
    font-size: 14px;
    color: #ff3b00;
}

@media (min-width:860px) {
	.post-list-thumb:hover {
		box-shadow: 0 5px 10px 5px rgba(110,110,110,.4)
	}
}

@media (max-width:860px) {
	.post-list-thumb {
		margin: 0;
		height: auto
	}
}

@media (max-width:768px) {
	.float-content p {
		height: auto;
		display: block
	}

	.post-bottom {
		display: none
	}

	.post-list-thumb {
		padding: 0;
		border: 0;
		box-shadow: none
	}

	.post-thumb,.post-content-wrap,.float-content {
		width: 100%;
		left: 0
	}

	.post-content-wrap,.post-list-thumb-left .post-content-wrap {
		text-align: left;
		margin: 0;
		padding: 20px;
		float: none;
		box-shadow: none;
		border-top: 0
	}

	.post-list-thumb:before {
		content: '';
		width: 1px;
		height: 100px;
		background-color: rgba(0,0,0,0);
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		bottom: -101px;
		z-index: 0
	}

	.float-content {
		box-shadow: none;
		padding: 0;
		margin: 0
	}

	.post-bottom {
		text-align: right
	}

	.post-list-thumb-left .post-thumb a,.post-thumb a {
		border-radius: 10px
	}
}

@media (max-width:600px) {
	.post-thumb a {
		height: 210px
	}

	.float-content .post-text {
		font-size: 13px;
		margin-bottom: 1em
	}
}
</style>

