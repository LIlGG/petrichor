<!--
    搜索界面
-->
<template>
    <form
        class="js-search search-form search-form--modal"
        :method="method"
        :action="action"
        :role="role"
    >
        <div class="search-form__inner">
            <search :tips="searchTips">
                <input class="text-input" type="search" name="s" placeholder="Search" required>
            </search>
        </div>
        <div class="search_close" @click="searchClose"></div>
    </form>
</template>

<script>
import Search from "components/Search";
export default {
  props: ["method", "action", "role"],
  components: {
    Search
  },
  data() {
    return {
      searchTips: "想要找点什么呢？"
    };
  },
  methods: {
    searchClose() {
      this.$store.dispatch("app/setSearch", false);
    }
  }
};
</script>
