<script setup>
import { onMounted, ref, watch } from '@vue/runtime-core';
import { useRoute } from "vue-router";
import { useFetch } from '../hooks/useFetch';

const route = useRoute()
const food = ref(null)
const { data, loading, error, fetchData } = useFetch(`/api/foods/${route.params.id}?populate[0]=bannerImage`)

watch(data, () => {
  food.value = data.value.data.attributes
  console.log(food.value);
})

onMounted(() => {
  fetchData()
})

</script>

<template>
  <div v-if="loading" class="loader">
    <p>loading ...</p>
  </div>
  <div v-else-if="error" class="error">
    <p>ENCOUNTERED AN ERROR</p>
  </div>
  <div v-else class="page">
    <h4>{{ food.Name.toUpperCase() }}</h4>
    <div v-html="food.Description" class="description"></div>
  </div>
</template>

<style>
</style>