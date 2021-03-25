<template>
   <div id="nav">
      <img alt="logo" src="../assets/logo.png" height="150px"><br>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">About Products page</router-link> |
      <router-link to="/add"> Add </router-link>
      <a @click.prevent="logout" class="btn btn-outline-danger m-2" href="">Logout</a>
      </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
