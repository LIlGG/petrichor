<template>
  <!-- 是否为隐藏的节点 -->
  <li v-if="!item.hidden">
    <!-- 渲染父节点菜单（父节点菜单有可能不进行点击跳转） -->
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <item
          :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"
          :title="onlyOneChild.meta.title"
          :span="item.meta.span"
        />
      </app-link>
    </template>
    <!-- 渲染子节点菜单 -->
    <ul v-else>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" :span="item.meta.span"/>
      </template>
      <nav-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </ul>
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
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });

      if (showingChildren.length === 1) {
        return true;
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
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
    }
  }
};
</script>
