<script setup lang="ts">
import { ref, watch } from 'vue'
import { useIdeaStore } from '@/stores/ideaStore'

const ideaStore = useIdeaStore()

const sortOptions = [
  { value: '-published_at', label: 'Newest' },
  { value: 'published_at', label: 'Oldest' }
]
const pageSizeOptions = [10, 20, 50]
const selectedSort = ref(ideaStore.sortOrder)
const selectedPageSize = ref(ideaStore.pageSize)

watch(selectedSort, (newValue) => {
  ideaStore.setSortOrder(newValue)
})
watch(selectedPageSize, (newValue) => {
  ideaStore.setPageSize(newValue)
})
</script>

<template>
  <div class="flex justify-between items-center py-6">
    <div class="text-lg text-text">
      Showing {{ ideaStore.currentRange }} of {{ ideaStore.totalItems }}
    </div>
    <div class="flex items-center gap-6">
      <div>
        <span class="text-lg text-text mr-4">Show per page:</span>
        <select v-model="selectedPageSize" class="border-2 border-zinc-200 rounded-full px-10 py-2">
          <option v-for="size in pageSizeOptions" :key="size" :value="size" class="px-4">
            {{ size }}
          </option>
        </select>
      </div>
      <div>
        <span class="text-lg text-text mr-4">Sort by:</span>
        <select
          v-model="selectedSort"
          class="border-2 border-zinc-200 rounded-full px-10 py-2"
        >
          <option v-for="option in sortOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
