<script setup lang="ts">
import SlantedBanner from '@/components/banner/SlantedBanner.vue'
import IdeasPage from '@/pages/Ideas/IdeasPage.vue'

const bannerData = {
  imageUrl: 'https://img.freepik.com/free-vector/illustration-startup-business_53876-9144.jpg',
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
  <IdeasPage />
</template>
