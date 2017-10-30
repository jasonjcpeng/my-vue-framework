<template>
  <div>
    <h1>{{content}}</h1>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      content: "Home Page"
    };
  },
  mounted() {
    this.$refs.container.oncontextmenu = e => {
      e.preventDefault();
    };
  },
  methods: {
    rightOnclick(e) {
      if (e.button === 2) {
        this.content = "Right Click";
      } else {
        this.content = "Home Page";
      }
    }
  }
};
</script>
<style>
.father{
  /* overflow: hidden; */
}
.container {
  display: block;
  float: left;
  background-color: #000;
  height: 300px;
  width: 300px;
}
.container1 {
  display: block;
  background-color: #eeeeee;
  height: 600px;
  width: 600px;
}
.cl{
  clear: both;
}
.container2 {
  display: block;
  background-color:red;
  height: 600px;
  width: 600px;
}
</style>

