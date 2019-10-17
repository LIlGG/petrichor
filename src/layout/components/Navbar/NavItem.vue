<template>
  <!-- 是否为隐藏的节点 -->
  <li v-if="!item.hidden">
    <!-- 渲染父节点菜单（父节点菜单有可能不进行点击跳转） -->
    <app-link v-if="item.meta" :to="resolvePath(item.path)">
      <item
        :icon="item.meta.icon||(item.meta&&item.meta.icon)"
        :title="item.meta.title"
        :span="item.meta.span"
      />
    </app-link>
    <!-- 渲染子节点菜单 -->
    <!-- 如果当前节点有多个子节点的时候则进行渲染 -->
    <template v-if="hasShowingChild(item.children)">
      <ul  v-show="subShow">
        <nav-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </ul>
    </template>
  </li>
</template>

<script>
import path from "path";
import Item from "./Item";
import AppLink from "./Link";
import { isExternal } from "@/utils/validate";

export default {
  name: "NavItem",
  components: { Item, AppLink },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
    };
  },
  methods: {
    hasShowingChild(children = []) {
      if (children.length >= 1) {
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  }
};
</script>
