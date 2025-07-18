<script setup lang="ts">
onMounted (() => {
  const redirectPath = new URLSearchParams(window.location.search).get('redirect')
  if (redirectPath) {
    router.replace(redirectPath)
  }
})
</script>

<template>
  <router-view />
</template>
