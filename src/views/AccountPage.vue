<script setup>
import { ref } from 'vue';
import { storeToRefs } from "pinia";
import AuthLogin from '../components/AuthLogin.vue';
import AuthRegister from '../components/AuthRegister.vue';
import AuthPage from '../components/AuthPage.vue';
import { useAuthStore } from '../app/store.pinia';
import Dashboard from '../components/Dashboard.vue';

const {storeUser} = storeToRefs(useAuthStore())

</script>

<template>
  <div class="page">
    <AuthPage v-if="!storeUser" />
    <Dashboard v-else />
  </div>
</template>



<style>
</style>