<!--
 * @Author: WangQunQun
 * @Date: 2020-12-09 22:18:36
 * @LastEditTime: 2020-12-09 22:24:03
 * @LastEditors: WangQunQun
 * @Description: 该文件的作用是：
 * @FilePath: /fe-interview/src/App.vue
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
