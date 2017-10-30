<script>
import _types from '../../store/mutation-types.vue';
const index = {
  state: {
    greetting: 'Greetting!!!!!!!',
    sysName: 'Skada System',
    loading: false,
  },
  mutations: {
    [_types.CONTAINER_INDEX_CHANGE_LOADING_STATE](state, boolean) {
      if (typeof boolean !== 'undefined') {
        state.loading = boolean
      } else {
        state.loading = !state.loading
      }
    },
  },
  actions: {
    actionLogin(ctx,payload) {
      ctx.commit(_types.CONTAINER_INDEX_CHANGE_LOADING_STATE, true);
      window.setTimeout(function() {
        if (payload.password === '111') {
          payload.callback()
        }
        ctx.commit(_types.CONTAINER_INDEX_CHANGE_LOADING_STATE);
      }, 1000)
    }
  },
  getters: {
    currentComponent(state) {
      if (state.loading) {
        return 'loadingComponent';
      }
      return 'Login';
    },
  },
};
export default index;
</script>

