<script setup>
import FoodCard from '../components/FoodCard.vue';

const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
</script>

<template>
  <div class="page">
    <div class="page-title">
      <h3>CART</h3>
    </div>
    <FoodCard :key="food.id" v-for="food in cartItems" :food="food" />
  </div>
</template>



<style>

</style>