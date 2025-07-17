<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { NavItem } from '@/components/nav/types.ts'

const props = defineProps<{ item: NavItem }>()

const route = useRoute()
const isActive = computed(() => {
  return route.path === props.item.path
})
</script>

<template>
  <router-link
    :to="item.path"
    class="py-2 text-background relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-background after:opacity-0 [&.active-nav-item]:after:opacity-100"
    :class="{ 'active-nav-item': isActive }"
  >
    {{ item.label }}
  </router-link>
</template>
