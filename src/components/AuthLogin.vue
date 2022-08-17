<script setup>
import { ref } from "@vue/runtime-core";

const error = ref(null);
const email = ref("");
const password = ref("");
const emit = defineEmits(["register"]);

const login = () => {
  console.log('signin');
}

</script>

<template>
  <!-- LOG IN COMPONENT -->
  <div class="auth-login">
    <form @submit.prevent="login">
      <div class="error">
        <div v-if="error" class="alert alert-danger">{{error}}</div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p>Don't have an account? <a href="#" @click="$emit('register')">Register</a></p>
  </div>
</template>

<style>

</style>