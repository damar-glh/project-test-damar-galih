<script setup lang="ts">
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
</script>

<template>
  <div>
    <Navbar/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>