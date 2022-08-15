<script setup>
import { ref } from "@vue/runtime-core"

const props = defineProps({
  food: {
    type: Object,
    required: true
  }
})
const host = import.meta.env.MODE === "development" ? "http://localhost:1337" : import.meta.env.VITE_STRAPI_URL;
const imageUrl = `${host}${props.food.attributes.bannerImage.data.attributes.formats.thumbnail.url}`
const count = ref(1)

const addToCart = () => {
  const foodItem = {
    id: props.food.id,
    name: props.food.attributes.Name,
    price: props.food.attributes.Price * count.value,
    quantity: count.value,
    imageUrl: imageUrl
  }
  const localCart = JSON.parse(localStorage.getItem("cart")) || []
  localStorage.setItem(`cart`, JSON.stringify([...localCart, foodItem]))
}

const countInCart = (value) => {
  count.value += value;
}

</script>

<template>
  <div class="food-card">
    <div class="banner-image">
      <img :src="imageUrl" />
    </div>
    <div class="food-details">
      <h3>{{ props.food.attributes.Name }}</h3>
      <p>Ksh.{{ props.food.attributes.Price * count }}</p>
    </div>
    <div class="order-controls">
      <div class="quantity-control">
        <button :disabled="count==1" @click="countInCart(-1)">-</button>
        <span>{{count}}</span>
        <button @click="countInCart(+1)">+</button>
      </div>
      <button @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<style lang="scss">
  .food-card {
    border: 1px solid rgb(189, 189, 189);
    border-radius: 8px;
    overflow: hidden;
    width: max(400px, 33%);
    min-width: 400px;
    height: 200px;
    display: grid;
    grid-template-columns: auto 1fr;

    .banner-image {
      grid-row-start: 1;
      grid-row-end: 3;

      img {
        width: 200px;
        height: 200px;
        object-fit: fill;
      }
    }
    .food-details {
      padding: 1rem 1rem 0 1rem;
    }
    .order-controls {
      display: flex;
      flex-direction: column;
      justify-content: end;
      gap: 0.5rem;
      padding: 0 1rem 1rem 1rem;

      .quantity-control {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
</style>