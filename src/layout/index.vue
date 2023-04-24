<style lang="scss" scoped>
.main {
  min-width: 1200px;
}
</style>

<template>
  <div class="main">
    <Navbar />
    <div class="main-container">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Navbar from '@/layout/Navbar.vue'
</script>
