<script setup lang="ts">
import NavItem from '@/components/nav/NavItem.vue'
import NavItems from '@/components/nav/data.ts'
import { useNavbarStore } from '@/stores/navbarStore'

const navbarStore = useNavbarStore()
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full flex justify-around items-center px-6 py-6 z-50 transition-all duration-300 bg-primary"
    :class="{
      'translate-y-0': navbarStore.isVisible,
      '-translate-y-full': !navbarStore.isVisible,
      'opacity-100': navbarStore.atTopOfPage,
      'opacity-85': !navbarStore.atTopOfPage && navbarStore.isScrollingUp
    }"
  >
    <div class="logo">
      <router-link to="/">
        <img
          src="@/assets/site-logo.webp"
          alt="Site Logo"
          class="h-10 w-auto brightness-0 invert-100"
        />
      </router-link>
    </div>

    <nav class="flex items-center space-x-6">
      <NavItem v-for="item in NavItems" :key="item.path" :item="item" />
    </nav>
  </header>
</template>
