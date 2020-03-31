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
            `,
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
