import Vue from 'vue';
import Router from 'vue-router';

/* Layout */
import Layout from '@/views/layout/Layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          component: () => import('./views/Home.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: Layout,
      redirect: '/about/index',
      children: [
        {
          path: '/about/index',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "test" */ './views/Login.vue')
    }
  ]
});
