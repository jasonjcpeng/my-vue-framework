<script>
import containerIndex from '../container/index/index.vue';
import containerHome from '../container/home/home.vue';
export default {
  routes: [{
    path: '/',
    component: containerIndex,
  },{
    path: '/home',
    component: containerHome,
  }
  ],
}
</script>