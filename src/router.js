import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';

Vue.use(Router);

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/about',
    name: 'about',
    component: () => import('./components/About.vue')
  },
  {
    path: '/user/:id',
    name: 'about-user',
    component: () => import('./components/AboutUser.vue')
  },
  {
    path: '/post/:userId/:id',
    name: 'post',
    component: () => import('./components/UserProfile/PostFullView.vue')
  }
];

export default new Router({
  mode: 'history',
  routes
});
