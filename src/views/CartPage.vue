<script setup>

const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
console.log(cartItems);

</script>

<template>
  <h1>CART</h1>
  <div :key="item.id" v-for="item in cartItems" class="cartitem">
    <h4>{{item.name}}</h4>
    <p>{{item.quantity}} at Ksh.{{item.price}}</p>
  </div>
</template>



<style>

</style>