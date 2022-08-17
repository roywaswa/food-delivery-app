<script setup>
import { ref } from 'vue';
import AuthLogin from './AuthLogin.vue';
import AuthRegister from './AuthRegister.vue';

const authAction = ref("login");

</script>

<template>
  <div class="page-title">
    <h3>{{authAction.toUpperCase()}}</h3>
  </div>
  <AuthLogin @register="authAction = 'register'" v-if="authAction == 'login'" />
  <AuthRegister @login="authAction = 'login'" v-else-if="authAction == 'register'" />
  <div v-else class="error">ERROR</div>
</template>

<style>

</style>