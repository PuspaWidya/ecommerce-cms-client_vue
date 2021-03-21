<template>
  <div class="home">
    <img alt="banner" :src="banner" height="350px">
    <Title msg="Welcome to Your Favorite App"
    ></Title>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  data () {
    return {
      banner: 'https://i.pinimg.com/originals/4d/89/d1/4d89d151ed0d759f0ffaa479d5f2046e.jpg',
      msg1: 'New-Look, New style'
    }
  },
  components: {
    Title
  }
}
</script>
