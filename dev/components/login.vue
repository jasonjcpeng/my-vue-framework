<template>
  <div>
    <div class="login">
      <h1>{{title}}</h1>
      <h2>input: {{input}}</h2>
      <transition-group name="list">
        <li class="list-item" v-for="(value,index) in checkbox" :key="value">{{index+1}}:{{value}} |</li>
      </transition-group>
      <input type="text" v-model="input" />
      <input ref="input" type="checkbox" @change.self="checkboxInput" :value="checkbox1" />{{checkbox1}}
      <input type="checkbox" @change.self="checkboxInput" :value="checkbox2" />{{checkbox2}}
      <input type="button" value="Login" @click="login">
      <input v-if="isLogin" type="button" value="Logout" @click="logout">
    </div>
    <transition name="fade">
      <router-link v-if="isLogin" to="/home">href to home</router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name:"Login",
  props: {
    systemName: String
  },
  data(){
    return {
      checkbox1: 'one',
      checkbox2: 'two',
      firstTitle: 'Login ',
      isLogin: false,
      input: '',
      checkbox: ['a','b','c','d']
    }
  },
  computed: {
    title: function() {
      return this.firstTitle + this.systemName;
    }
  },
  methods: {
    login(){
      let _this = this;
      let payload = {
        password:this.input,
        callback(){
          _this.isLogin = true
        }
      }
      this.$emit('actionLogin',payload)
    },
    logout(){
      this.isLogin = false
    },
    checkboxInput(e){
      if(e.target.checked){
        this.checkbox.splice(2,0,e.target.value)
      }else{
        this.checkbox.splice(2,1)
      }
    }
  }
}
</script>

<style scoped>
.login {
  text-align: center
}

h1 {
  color: #999999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

.list-item {
  margin-right: 10px;
  display: inline-block;
}

.list-move {
  transition: transform 1s;
}

.list-enter-active {
  transition: all 1s;
}

.list-leave-active {
  position: absolute
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

