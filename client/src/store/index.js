import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'
const newAxios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: 'Store',
    products: [],
    oneProduct: {}
  },
  mutations: {
    productShow (state, payload) {
      state.products = payload
    },
    oneShow (state, payload) {
      state.oneProduct = payload
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
    deleteProduct (context, payload) {
      axios.delete(`/products/${payload}`, {
        headers: {
          access_token: localStorage.getItem('access_token')
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
      newAxios({
        method: 'post',
        url: 'http://localhost:3000/products/',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          imageUrl: payload.imageUrl,
          price: payload.price,
          stock: payload.stock
        }
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
    },
    logout (context, payload) {
      localStorage.removeItem('access_token')
      router.push('login')
    },
    editProduct (context, payload) {
      newAxios({
        method: 'put',
        url: `http://localhost:3000/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          imageUrl: payload.imageUrl,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    oneProduct (context, payload) {
      console.log(payload)
      axios.get(`/products/${payload}`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('oneShow', data)
          console.log('fetch satu data')
          console.log(data, '<<<')
          router.push('/edit')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
