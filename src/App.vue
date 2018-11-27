<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <cube-button> qq</cube-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from 'cube-ui/src/components/button/button'

export default {
  name: 'app',
  components: {
    Button,
    HelloWorld
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
