<template>
    <div>
        <template
            v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
        >
            <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
                <item
                    :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"
                    :title="onlyOneChild.meta.title"
                />
            </app-link>
        </template>
    </div>
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
      console.log(showingChildren)
      if (showingChildren.length === 1) {
        return true;
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return true;
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
