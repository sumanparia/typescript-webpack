import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'

import './sass/main.scss';

import { HomeComponent } from './components/home/home';

// register the plugin
Vue.use(VueRouter);
Vue.use(Vuetify);

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent }
  ]
});

new Vue({
  el: '#main-container',
  router: router,
  components: {
  }
});