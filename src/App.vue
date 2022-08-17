<script setup>
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './app/auth.methods';
import { useAuthStore } from './app/store.pinia'
import FooterSection from './components/FooterSection.vue'
import HeaderSection from './components/HeaderSection.vue'

const authStore = useAuthStore()

onAuthStateChanged(auth, user => {
  if (user) {
    authStore.$patch({storeUser: user})
  }
}, error => {
  console.log(error);
});


</script>

<template>
  <HeaderSection />
  <router-view />
  <FooterSection />
</template>

<style scoped>

</style>
