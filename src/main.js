import Vue from 'vue';
import VueBlu from 'vue-blu';
import 'vue-blu/dist/css/vue-blu.min.css';
import './common/css/github-markdown.css';
import './common/css/global.css';
import VueRouter from 'vue-router';
import routes from './routes';
import filters from './filters';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueBlu);

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
