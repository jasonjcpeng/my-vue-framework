<script>
import Vue from 'vue';
import Router from 'vue-router';
import routerIndex from './router/index.vue';
import store from './store/index.vue';
Vue.use(Router)

const router = new Router(routerIndex);

new Vue({
  router:router,
  store:store,
  render(h){
     return (<router-view></router-view>)
  }
}).$mount('#root');
</script>


