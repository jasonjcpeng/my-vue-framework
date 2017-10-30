<script>
import Vuex from 'vuex';
import Vue from 'vue';
import index from '../container/index/module.vue';
import home from '../container/home/module.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    index:index,
    home:home
  }
});

export default store;  
</script>

