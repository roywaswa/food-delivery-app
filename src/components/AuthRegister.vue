<script setup>
import { ref } from 'vue';
import { firebaseRegisterUser } from "../app/auth.methods";

const error = ref(null);
const email = ref("");
const password = ref("");
const emit = defineEmits(["login"]);

const register = () => {
  firebaseRegisterUser(email.value, password.value)
    .then((res) => console.log(res))
    .catch(error.value = "Error registering user");
}
</script>

<template>
  <!-- ACCOUNT REGISTRATION COMPONENT -->
  <div class="auth-register">
    <form @submit.prevent="register">
      <div class="error">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
      </div>
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
    <p>Already have an account? <a href="#" @click="$emit('login')">Login</a></p>
  </div>
</template>

<style>

</style>