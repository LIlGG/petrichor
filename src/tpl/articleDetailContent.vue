<template>
    <article :class="addClass">
				<div class="entry-content">
					<component :is="componentDom(item)" v-for="item in allComponents" :key="item"></component>
				</div>
				<footer class="entry-footer">
				</footer>
    </article>
</template>

<script>

export default {
  name: 'articleDetailContent',
  components: {
  },
  data() {
    return {
        thumb: {
          postId: 1,
          class: "",
          content: 
            `<p>当我们需要用 GraphQL 查询多层套嵌的数据，比如像 WordPress 这样套嵌的评论信息时，通常的写法是：</p>
            <pre>{
  posts(first: 100) {
    nodes {
      id
      title
      comments {
        nodes {
          ...CommentFields
          replies: children {
            nodes {
              ...CommentFields
              replies: children {
                nodes {
                  ...CommentFields
                  replies: children {
                    nodes {
                      ...CommentFields
                      replies: children {
                        nodes {
                          ...CommentFields
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 
fragment CommentFields on Comment {
  id
  date
  type
  approved
  content
}</pre>
            <p>以上的写法只实现了四层套嵌评论的查询，很麻烦对不对？这或许是 GraphQL 的缺陷，但这也或许正体现了 GraphQL 的设计理念——所得即所查。</p>
            <p>找了一下，没有现成的轮子，就自己写一个套嵌实现吧（注意 graphql 查询语句要顶头写，多余的缩进会影响递归结果）：</p>
            <p>Q.E.D. <i class="fa fa-meetup" aria-hidden="true" style="color:#d34836;"></i></p>
            <aplayer :musics="{ server: 'netease', type: 'playlist', id: 2345868969 }" :option="{fixed: false}"></aplayer>
            <div><ul class="link-items fontSmooth"><li class="link-item"><a class="link-item-inner effect-apollo" href="https://ak.2heng.xin/" title="明日方舟主界面 UI 复刻 " target="_blank" rel="friend"><img class="lazyload" onerror="imgError(this,1)" data-src="https://view.moezx.cc/images/2019/06/11/74751807_p0.jpg" src="https://view.moezx.cc/images/2017/12/30/Transparent_Akkarin.th.jpg"><span class="sitename">Arkngihts UI</span><div class="linkdes">明日方舟主界面 UI 复刻</div></a></li><li class="link-item"><a class="link-item-inner effect-apollo" href="https://scholar.2heng.xin/" title="谷歌学术镜像" target="_blank" rel="friend"><img class="lazyload" onerror="imgError(this,1)" data-src="https://cloud.moezx.cc/Picture/svg/landscape/fields.svg" src="https://cloud.moezx.cc/Picture/svg/landscape/fields.svg"><span class="sitename">Google Scholar</span><div class="linkdes">谷歌学术镜像</div></a></li><li class="link-item"><a class="link-item-inner effect-apollo" href="https://git.2heng.xin/mashiro/sakura2" title="Sakura主题重构ing..." target="_blank" rel="friend"><img class="lazyload" onerror="imgError(this,1)" data-src="https://cloud.moezx.cc/Picture/svg/landscape/mill.svg" src="https://cloud.moezx.cc/Picture/svg/landscape/mill.svg"><span class="sitename">Sakura2</span><div class="linkdes">Sakura主题重构ing...</div></a></li><li class="link-item"><a class="link-item-inner effect-apollo" href="https://shino.cc/ksdf" title="中文维基镜像" target="_blank" rel="friend"><img class="lazyload" onerror="imgError(this,1)" data-src="https://cloud.moezx.cc/Picture/svg/landscape/desert-1.svg" src="https://cloud.moezx.cc/Picture/svg/landscape/desert-1.svg"><span class="sitename">Wikipedia</span><div class="linkdes">中文维基镜像</div></a></li><li class="link-item"><a class="link-item-inner effect-apollo" href="https://2heng.xin/lovelive/" title="LoveLive 日服档线预测" target="_blank" rel="friend"><img class="lazyload" onerror="imgError(this,1)" data-src="https://view.moezx.cc/images/2018/01/27/a_46895067_26.th.jpg" src="https://view.moezx.cc/images/2018/01/27/a_46895067_26.th.jpg"><span class="sitename">ラブライブ</span><div class="linkdes">LoveLive 日服档线预测</div></a></li><li class="link-item"><a class="link-item-inner effect-apollo" href="https://deemo.shino.cc/" title="Deemo 歌曲封面集" target="_blank" rel="friend"><img class="lazyload" onerror="imgError(this,1)" data-src="https://view.moezx.cc/images/2018/04/06/Deemo43628805_by_T..jpg" src="https://view.moezx.cc/images/2018/04/06/Deemo43628805_by_T..jpg"><span class="sitename">古树旋律复刻</span><div class="linkdes">Deemo 歌曲封面集</div></a></li></ul></div>`,
        }
    }
  },
  // props: {
  //   thumb: {
  //     type: Object,
  //     required: true
	// 	}
	// },
	computed: {
    addClass() {
      return "post-" + this.thumb.postId + " " + this.thumb.class;
    },
    allComponents() {
      let parser = new DOMParser();
      let doc = parser.parseFromString(this.thumb.content, "text/html");
      
      return this.thumb.content.split(">\n");
    },
  },
  methods: {
    componentDom(item) {
      return {
        template: item + ">"
      };
    }
  }
}
</script>

<style>

</style>
