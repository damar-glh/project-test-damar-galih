<script setup lang="ts">
import Navbar from '@/components/nav/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="pt-20">
      <router-view />
      <div class="min-h-screen w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <slot />
        </div>
      </div>
      <div class="min-h-screen w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <slot />
        </div>
      </div>
      <div class="min-h-screen w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <slot />
        </div>
      </div>
      <div class="min-h-screen w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
