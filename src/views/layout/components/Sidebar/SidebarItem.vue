<template>
  <div v-if="!item.hidden&&item.children" class="menu-wrapper">
    <router-link v-if="hasOneShowingChild(item.children) && !onlyOneChild.children&&!item.alwaysShow" :to="resolvePath(onlyOneChild.path)">
      <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
        <svg-icon v-if="onlyOneChild.meta&&onlyOneChild.meta.icon" :icon-class="onlyOneChild.meta.icon"></svg-icon>
        <span v-if="onlyOneChild.meta&&onlyOneChild.meta.title" slot="title">{{onlyOneChild.meta.title}}</span>
      </el-menu-item>
    </router-link>

    
  </div>
</template>

<script>
  import path from 'path';

  export default {
    name: 'SidebarItem',
    props: {
      // route object
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
        default: ''
      }
    },
    data() {
      return {
        onlyOneChild: null
      };
    },
    methods: {
      hasOneShowingChild(children) {
        const showingChildren = children.filter(item => {
          if (item.hidden) {
            return false;
          } else {
            // temp set(will be used if only has one showing child )
            this.onlyOneChild = item;
            return true;
          }
        });

        if (showingChildren.length === 1) {
          return true;
        }
        return false;
      },
      resolvePath(...paths) {
        return path.resolve(this.basePath, ...paths);
      }
    }
  };
</script>

<style lang="stylus" scoped>
</style>


