import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: 'Store',
    products: []
  },
  mutations: {
    productShow (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProduct (context, payload) {
      axios.get('/products', {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('productShow', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      axios.delete(`/products/${id}`, {
        headers: {
          acess_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          console.log('data has been deleted')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: '/products',
        headers: {
          acess_token: localStorage.getItem('access_token')
        },
        name: payload.name,
        imageUrl: payload.imageUrl,
        price: payload.price,
        stock: payload.stock
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (contex, payload) {
      axios.post('/login', {
        email: payload.email,
        password: payload.password
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
