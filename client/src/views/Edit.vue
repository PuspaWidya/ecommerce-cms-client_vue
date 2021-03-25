<template>
  <div>
  <h3> Add Your Products</h3>
     <div class="container-fluid w-50">
            <form>
              <div class="form-group">
                <label for="email">Name</label>
                <input type="text" name="name" id="name" class="form-control" v-model="editData.name">
              </div>
              <div class="form-group">
                <label for="imageUrl">imageUrl</label>
                <input type="text" name="imageUrl" id="imageUrl" class="form-control" v-model="editData.imageUrl">
              </div>
               <div class="form-group">
                <label for="price">Price</label>
                <input type="number" name="price" id="price" class="form-control" v-model="editData.price">
              </div>
               <div class="form-group">
                <label for="stock">stock</label>
                <input type="number" name="stock" id="stock" class="form-control" v-model="editData.stock">
              </div>
              <div class="d-flex justify-content-center">
                <button @click="edit()" type="button" class="btn btn-lg btn-outline-warning my-3"> Edit</button>
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
    edit (payload) {
      const product = {
        name: this.editData.name,
        imageUrl: this.editData.imageUrl,
        price: this.editData.price,
        stock: this.editData.stock,
        id: this.editData.id
      }

      this.$store.dispatch('editProduct', product)
    },
    fetchOne () {
      this.$store.dispatch('oneProduct')
      return this.$store.state.oneProduct
    }
  },
  computed: {
    editData () {
      return this.$store.state.oneProduct
    }
  },
  created () {
    this.$store.dispatch('oneProduct')
  },
  mounted () {
    this.$store.dispatch('oneProduct')
  }
}
</script>

<style>

</style>
