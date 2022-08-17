<script>

import { ref } from 'vue';

const authAction = ref("register");
const email = ref("");
const password = ref("");
const register = () => {
  console.log('signup');
}


</script>

<template>
<!-- ACCOUNT REGISTRATION COMPONENT -->
<div class="auth-register">
  <h1>Register</h1>
  <form @submit.prevent="register">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
  <p>Already have an account? <a href="#" @click="authAction = 'login'">Login</a></p>
</div>
</template>

<style>

</style>