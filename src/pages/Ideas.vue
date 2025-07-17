<script setup lang="ts">
import SlantedBanner from '@/components/banner/SlantedBanner.vue'

const bannerData = {
  imageUrl: '/src/assets/banner.jpg',
  title: 'Ideas',
  subtitle: 'Where all our great things begin'
}
</script>

<template>
  <SlantedBanner
    :imageUrl="bannerData.imageUrl"
    :title="bannerData.title"
    :subtitle="bannerData.subtitle"
    :slantHeight="400"
  />
</template>
