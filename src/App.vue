<template>
  <div id="app">
    <h1>我的编辑器</h1>
    <div>
      <CommonEditor/>
    </div>
  </div>
</template>

<script>
import CommonEditor from './components/CommonEditor.vue'

export default {
  name: 'App',
  components: {
    CommonEditor
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
  width:60%;
  height:100%;
  margin-left:20%;
}
</style>
