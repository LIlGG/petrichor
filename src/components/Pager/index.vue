<template>
    <div class="pagination" @click="nextPage">
        <a v-if="!isTotal" :class="{'loading': isLoad}">{{name}}</a>
        <span v-else>{{bottomName}}</span>
    </div>
</template>

<script>
export default {
  name: "Pager",
  data() {
    return {
      isLoad: false
    };
  },
  computed: {
    isTotal() {
      return this.curPage >= this.total;
    }
  },
  props: {
    name: {
      type: String,
      default: "Previous"
    },
    bottomName: {
      type: String,
      default: "很高兴你翻到这里，但是真的没有了..."
    },
    curPage: {
      type: Number,
      default: 0
    },
    // 总页数
    total: {
      type: Number,
      default: 1
    }
  },
  methods: {
    // 下一页
    nextPage() {
      if (this.isTotal) {
        return false;
      }
      this.isLoad = true;
      this.$emit("setPage", this.curPage);
    }
  },
  watch: {
    curPage: {
      handler(val) {
        this.isLoad = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  margin: 40px 0 80px;
  display: inline-block;
  a {
    padding: 13px 35px;
    border: 1px solid #d6d6d6;
    border-radius: 50px;
    color: #adadad;
    &:hover {
      box-shadow: 0 0 4px rgba(255, 165, 0, 0.85);
      border: 1px solid orange;
      color: orange;
    }
  }
  span {
    color: #989898;
    font-size: 15px;
  }
  .loading {
    background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/wordpress-rotating-ball-o.svg");
    background-position: center;
    background-repeat: no-repeat;
    color: #555;
    border: none;
    background-size: auto 100%;
    &:hover {
      border: none;
      box-shadow: none;
    }
  }
}

#pagination.pagination-archive {
  margin: 80px 0;
}
</style>

