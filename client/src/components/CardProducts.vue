<template>
    <div class="card col col-3" style="width: 18rem;">
    <img class="card-img-top" :src="product.imageUrl" alt="Card image cap" style="height:350px">
    <div class="card-body">
    <h2 class="card-title">{{product.name}}</h2>
    <p> Stock </p>
    <p class="card-text">{{product.stock}}</p>
    <a href="#" class="btn btn-primary"
    @click.prevent="deleteCard(product.id)">delete</a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CardProducts',
  props: ['product'],
  methods: {
    deleteCard (payload) {
      this.$store.dispatch('deleteProduct', payload)
    }
  }
}
</script>

<style>

</style>
