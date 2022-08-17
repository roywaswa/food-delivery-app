<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core"
import { useRoute } from "vue-router"

const router = useRoute()
const props = defineProps({
  food: {
    type: Object,
    required: true
  }
})
const count = ref(props.food.quantity)
const removed = ref(false)
const isCartPage = ref(false)


const addToCart = () => {
  const foodItem = {
    id: props.food.id,
    name: props.food.name,
    price: props.food.price,
    quantity: count.value,
    imageUrl: props.food.imageUrl,
    total: props.food.price * count.value
  }
  const localCart_old = JSON.parse(localStorage.getItem("cart")) || []
  const localCart_new = []
  // find foodItem in localstorage
  localCart_old.forEach(item => {
    if (item.id === foodItem.id) {
      item.quantity = foodItem.quantity
      item.total = foodItem.total
    }
    localCart_new.push(item)
  });
  // if foodItem not in localstorage, add it
  if (!localCart_old.find(item => item.id === foodItem.id)) {
    localCart_new.push(foodItem)
  } 
  localStorage.setItem("cart", JSON.stringify(localCart_new))
}

const removeFromCart = () => {
  const localCart_old = JSON.parse(localStorage.getItem("cart")) || []
  const localCart_new = []
  localCart_old.forEach(item => {
    if (item.id !== props.food.id) {
      localCart_new.push(item)
    }
  })
  localStorage.setItem("cart", JSON.stringify(localCart_new))
  removed.value = true
}

const countInCart = (value) => {
  count.value += value;
}

onMounted(() => {
  if (router.name === "cart") {
    isCartPage.value = true
  }
})

</script>

<template>
  <div v-if="!removed" class="food-card">
    <div class="banner-image">
      <img :src="props.food.imageUrl" />
    </div>
    <div class="food-details">
      <h3>{{ props.food.name }}</h3>
      <p>Ksh.{{ props.food.price * count }}</p>
    </div>
    <div class="order-controls">
      <button v-if="isCartPage" @click="removeFromCart">remove</button>
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