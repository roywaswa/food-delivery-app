<script setup>
import { onMounted, watch } from "vue";
import { useFetch } from "../hooks/useFetch";


const { data, fetchData } = useFetch('/api/foods');

watch(data, () => {
  console.log(data.value.data);
})

onMounted(() => {
  fetchData()
})
</script>

<template>
  <h1>FOOD PAGE</h1>
</template>



<style>
</style>