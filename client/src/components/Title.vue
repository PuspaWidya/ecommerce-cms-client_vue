<template>
  <div class="title">
    <h1>{{ pageTitle }}</h1>
    <h2> test 123</h2>
    <a> test 123123</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    pageTitle () {
      return this.$store.state.pageTitle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h2 {
  color: red;
}
h1 {
  color:#ad875d;
}
</style>
