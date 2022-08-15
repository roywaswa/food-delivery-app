<script setup>
import { onMounted } from "@vue/runtime-core"

const props = defineProps({
  food: {
    type: Object,
    required: true
  }
})
const host = import.meta.env.MODE === "development" ? "http://localhost:1337" : import.meta.env.VITE_STRAPI_URL;
const imageUrl = `${host}${props.food.attributes.bannerImage.data.attributes.formats.thumbnail.url}`

onMounted(() => {
  
})
</script>

<template>
  <div class="banner-image">
    <img :src="imageUrl" />
  </div>
  <div class="food-details">
    <h3>{{ props.food.attributes.Name }}</h3>
    <p>Ksh.{{ props.food.attributes.Price }}</p>
  </div>
  <div class="order-controls">
    <div class="quantity-control">
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
    <button>Add to cart</button>
  </div>
</template>

<style>

</style>