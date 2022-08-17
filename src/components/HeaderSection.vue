<script setup>
import { useRouter } from "vue-router";

const router = useRouter();



</script>

<template>
  <div role="navigation" class="header">
    <div role="heading" class="logo">Diner</div>
    <div class="nav-links">
      <router-link active-class="active" to="/">HOME</router-link>
      <router-link active-class="active" to="/foods">FOODS</router-link>
      <router-link active-class="active" to="/cart">CART</router-link>
      <router-link active-class="active" to="/account">ACCOUNT</router-link>
    </div>
  </div>
</template>



<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-block: 1rem;
}
.logo {
  font-size: 1.5rem;
    font-weight: bold;
  }
  
.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 100%;

  & > * {
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;
  }
  
  & > .active {
    border-bottom: 2px solid #fff;
  }
}


</style>