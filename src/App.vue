<script setup>
import { RouterLink, RouterView } from "vue-router";
import { store } from './store/store'
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>

<script>
// store.created()
export default {
  data() {
    return {
      store
    }
  },
}
</script>