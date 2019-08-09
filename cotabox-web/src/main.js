import Vue from 'vue';
import './plugins/axios';
import './plugins/vuetify';
import './plugins/vuetify';
import './plugins/vuetify';
import './plugins/vuetify';
import App from './App.vue';
import Error404 from './Error404.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';
import Router from "./Router.vue"

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: App },
  { path: "*", component: Error404 }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Router),
}).$mount('#app');
