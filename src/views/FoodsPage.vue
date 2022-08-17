<script setup>
import { onMounted, watch, ref } from "vue";
import { useFetch } from "../hooks/useFetch";
import FoodCard from "../components/FoodCard.vue";


const { data, loading, fetchData } = useFetch('/api/foods?populate[0]=bannerImage');
const foods = ref([])

watch(data, () => { foods.value = data.value.data })

const foodCardData = () => {
  const host = import.meta.env.MODE === "development" ? "http://localhost:1337" : import.meta.env.VITE_STRAPI_URL;

  return foods.value.map(food => {
    return {
      id: food.id,
      name: food.attributes.Name,
      price: food.attributes.Price,
      quantity: 1,
      imageUrl: `${host}${food.attributes.bannerImage.data.attributes.formats.large.url}`
    }
  })
}

onMounted(() => { fetchData() })
</script>

<template>
  <div class="page">
    <div class="page-title">
      <h3>FOOD MENU</h3>
    </div>
    <div class="delim"></div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div class="food-cards-container" v-else>
      <FoodCard v-for="food in foodCardData()" :key="food.id" :food="food" />
    </div>
  </div>
</template>



<style lang="scss">
  .page {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page-title {
    font-size: xx-large;
    margin-block: 2rem;
  }
  .delim {
    width: 20%;
    height: 0.2rem;
    background-color: #ccc;
    margin-bottom: 1rem;
  }
  .food-cards-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  }
</style>