<script>
import { defineComponent } from 'vue'
import FooterSection from './components/FooterSection.vue'
import HeaderSection from './components/HeaderSection.vue'

export default defineComponent({
  setup() {
    
  },
  components: { HeaderSection, FooterSection }
})
</script>

<template>
  <header-section />
  <router-view />
  <footer-section />
</template>

<style scoped>

</style>
