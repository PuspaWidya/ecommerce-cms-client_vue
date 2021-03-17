<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png">
    <img alt="banner" :src="banner" height="350px">
    <HelloWorld msg="Welcome to Your Favorite App"
    :word="msg1"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      banner: 'https://i.pinimg.com/originals/4d/89/d1/4d89d151ed0d759f0ffaa479d5f2046e.jpg',
      msg1: 'New-Look, New style'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
