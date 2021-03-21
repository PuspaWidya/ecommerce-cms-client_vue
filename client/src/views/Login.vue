<template>
   <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 login-section-wrapper d-flex justify-content-center pt-4">
          <div class="brand-wrapper" style="padding: 10px; height: 25px;">
          </div>
          <div class="login-wrapper my-auto" style="width: 300px;">
            <h1 class="login-title" style="font-weight: bold,;margin-bottom:25px;">Log in</h1>
            <form action="#!">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="email@example.com" v-model="email">
              </div>
              <div class="form-group mb-4">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="enter your passsword" v-model="password">
              </div>
              <div class="d-flex justify-content-center">
                <button @click="login" type="button" class="btn btn-outline-dark">Login</button>
              </div>
            </form>
            <p class="login-wrapper-footer-text" style="padding:10px">Don't have an account? <a href="#!" class="text-reset">Register here</a></p>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="assets/images/login.jpg" alt="login image" class="login-img">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.email, this.password)
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>
