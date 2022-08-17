<script setup>
import { ref } from 'vue';
import AuthLogin from '../components/AuthLogin.vue';
import AuthRegister from '../components/AuthRegister.vue';

const authAction = ref("login");
const loginUser = (some) => {
  console.log(some);
}
</script>

<template>
  <div class="page">
    <div class="page-title">
      <h3>{{authAction.toUpperCase()}}</h3>
    </div>
    <AuthLogin @register="authAction = 'register'" v-if="authAction == 'login'" />
    <AuthRegister @login="authAction = 'login'" v-else-if="authAction == 'register'" />
    <div v-else class="error">ERROR</div>
  </div>
</template>



<style>
</style>