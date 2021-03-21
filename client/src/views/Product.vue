<template>
  <div class="products">
    <div class="container">
    <div class="row">
    <h1>This is products page</h1>
    <CardProducts
    v-for="product in products"
    :key="product.id"
    :product="product"
    @deleteProduct="deleteProduct"
    />
  </div>
  </div>
</div>
</template>

<script>
import CardProducts from '@/components/CardProducts.vue'
import { mapState } from 'vuex'

export default {
  name: 'Products',
  data () {
    return {
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  computed: {
    ...mapState(['products'])
  },
  created () {
    this.fetchProduct()
  },
  components: { CardProducts }
}
</script>

<style>

</style>
