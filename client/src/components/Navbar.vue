<template>
   <div id="nav">
      <img alt="logo" src="../assets/logo.png" height="150px"><br>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">About Products page</router-link> |
      <router-link to="/add"> Add </router-link> ||
      <router-link to="/edit"> Edit product</router-link>
      </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
