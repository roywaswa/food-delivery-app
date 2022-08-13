<script setup>
import { onMounted, watch, ref } from "vue";
import { useFetch } from "../hooks/useFetch";


const { data, loading, fetchData } = useFetch('/api/foods');
const foods = ref([])

watch(data, () => { foods.value = data.value.data })

onMounted(() => {fetchData()})
</script>

<template>
  <h1>FOOD PAGE</h1>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <ul>
      <li v-for="food in foods">
        <!-- <router-link :to="{ name: food.attributes.Name, params: { id: food.attributes.foodslug } }"> -->
          {{ food.attributes.Name }}
        <!-- </router-link> -->
      </li>
    </ul>
  </div>
</template>



<style>
</style>