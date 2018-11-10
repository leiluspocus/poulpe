<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.gif">
    <TwitterBuffer msg="Simple Tweets Scheduler" :nbTweets=10 />
  </div>
</template>

<script>
import TwitterBuffer from './components/TwitterBuffer.vue'

export default {
  name: 'app',
  components: {
    TwitterBuffer
  }
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

img {
  width: 20%;
}
</style>
