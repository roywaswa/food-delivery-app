<script setup>
import { ref } from 'vue';
import AuthLogin from '../components/AuthLogin.vue';
import AuthRegister from '../components/AuthRegister.vue';

const authAction = ref("login");
</script>

<template>
  <AuthLogin v-if="authAction == 'login'" />
  <AuthRegister v-else-if="authAction == 'register'" />
  <div v-else class="error">ERROR</div>
</template>



<style>
</style>