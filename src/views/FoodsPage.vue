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
  <div v-else>

    <div class="food-card" :key="food.attributes.foodslug" v-for="food in foods">
      <router-link :to="'/foods/'+food.id">
        <FoodCard :food="food" />
      </router-link>
    </div>
  </div>
</template>



<style>
</style>