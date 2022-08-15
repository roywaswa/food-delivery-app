<script setup>
import { onMounted, watch, ref } from "vue";
import { useFetch } from "../hooks/useFetch";
import FoodCard from "../components/FoodCard.vue";


const { data, loading, fetchData } = useFetch('/api/foods?populate[0]=bannerImage');
const foods = ref([])

watch(data, () => { foods.value = data.value.data })

onMounted(() => { fetchData() })
</script>

<template>
  <h1>FOOD PAGE</h1>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div class="food-cards-container" v-else>
    <FoodCard 
      v-for="food in foods"
      :key="food.attributes.foodslug"
      :food="food"  
      class="food-card"/>
  </div>
</template>



<style lang="scss">
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