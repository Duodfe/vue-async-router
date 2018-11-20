<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical" :show-timeout="200" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item v-for="route in permission_routers" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import SidebarItem from './SidebarItem';

  export default {
    data() {
      return {
        isCollapse: false,
        permission_routers: [
          {
            name: 'home',
            path: '/',
            children: [
              {
                path: 'home',
                title: '首页',
                meta: {
                  title: '首页'
                }
              }
            ]
          },
          {
            name: 'about',
            path: '/about',
            children: [
              {
                path: '/about',
                title: '关于',
                meta: {
                  title: '关于'
                }
              }
            ]
          }
        ]
      };
    },
    components: {
      SidebarItem
    }
  };
</script>

