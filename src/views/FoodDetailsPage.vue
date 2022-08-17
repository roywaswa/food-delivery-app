<script setup>
import { onMounted, ref, watch } from '@vue/runtime-core';
import { useRoute } from "vue-router";
import { useFetch } from '../hooks/useFetch';

const route = useRoute()
const food = ref()
const { data, loading, error, fetchData } = useFetch(`/api/foods/${route.params.id}?populate[0]=bannerImage`)

const host = import.meta.env.MODE === "development" ? "http://localhost:1337" : import.meta.env.VITE_STRAPI_URL;
const imgUrl = ref() 

watch(data, () => {
  food.value = data.value.data.attributes
  imgUrl.value = `${host}${food.value.bannerImage.data.attributes.formats.small.url}`;
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
    <div class="banner">
      <img :src="imgUrl" alt="">
    </div>
    <div v-html="food.Description" class="description"></div>
  </div>
</template>

<style>
</style>