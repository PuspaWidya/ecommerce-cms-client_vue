<template>
    <div class="card col col-3" style="width: 18rem;">
    <img class="card-img-top" :src="product.imageUrl" alt="Card image cap" style="height:350px">
    <div class="card-body">
    <h2 class="card-title">{{product.name}}</h2>
    <p> Stock </p>
    <p class="card-text">{{product.stock}}</p>
    <p> Price </p>
    <p class="card-text">Rp. {{product.price}}</p>
    <a href="#" class="btn btn-primary"
    @click.prevent="deleteCard(product.id)">delete</a>
    <a href="#" class="btn btn-primary"
    @click.prevent="editCard(product.id)">edit</a>
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
        .then(_ => {
          this.$store.dispatch('fetchProduct')
        })
    },
    editCard (payload) {
      // console.log(id)
      this.$store.dispatch('oneProduct', payload)
        .then(_ => {
          this.$store.dispatch('fetchProduct')
        })
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style>

</style>
