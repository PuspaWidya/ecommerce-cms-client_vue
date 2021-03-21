<template>
  <div>
  <h3> Add Your Products</h3>
     <div class="container-fluid w-50">
            <form>
              <div class="form-group">
                <label for="email">Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="name Products" v-model="name">
              </div>
              <div class="form-group">
                <label for="imageUrl">imageUrl</label>
                <input type="text" name="imageUrl" id="imageUrl" class="form-control" placeholder="imageUrl" v-model="imageUrl">
              </div>
               <div class="form-group">
                <label for="price">Price</label>
                <input type="number" name="price" id="price" class="form-control" placeholder="Price" v-model="price">
              </div>
               <div class="form-group">
                <label for="stock">stock</label>
                <input type="number" name="stock" id="stock" class="form-control" placeholder="Stock" v-model="stock">
              </div>
              <div class="d-flex justify-content-center">
                <button @click="addData" type="button" class="btn btn-lg btn-outline-warning my-3">Add</button>
              </div>
            </form>
          </div>
          </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      name: '',
      imageUrl: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addData () {
      const product = {
        name: this.name,
        imageUrl: this.imageUrl,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', product)
    }
  }
}
</script>

<style>

</style>
