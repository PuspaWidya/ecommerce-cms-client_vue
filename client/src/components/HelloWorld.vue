<template>
  <div class="title">
    <h1>{{ msg }}</h1>
    <h1>{{word}}</h1>
    <h2> test 123</h2>
    <a> test 123123</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    word: String
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
  color:green;
}
</style>
