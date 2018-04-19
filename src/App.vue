<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="block">
      <router-link to="demo1">demo1</router-link>
      <router-link to="/">helloWorld</router-link>
      <router-link to="/demo2">demo2</router-link>
      <router-link to="/demo3">demo3</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.block{
  display: block;
  text-align: center;
}
</style>
