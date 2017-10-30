<template>
  <div>
    <p>{{greetting}}</p>
    <keep-alive>
      <component :is="currentComponent" :system-name="sysName" @actionLogin="actionLogin"></component>
    </keep-alive>
  </div>
</template>
<script>
import { mapState, mapGetters,mapActions } from 'vuex';
import _types from '../../store/mutation-types.vue';
import Login from '../../components/login.vue';
import loadingComponent from '../../components/loadingComponent.vue'
export default {
  name: "indexContainer",
  computed: {
    ...mapState({
      greetting: state => state.index.greetting,
      sysName: state => state.index.sysName
    }),
    ...mapGetters(['currentComponent'])
  },
  components: {
    'loadingComponent': loadingComponent,
    'Login': Login
  },
  methods:{
    ...mapActions(['actionLogin'])
  }
}
</script>

<style>
p {
  font-size: 2em;
  text-align: center;
}
</style>