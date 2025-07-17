<script setup lang="ts">
import { useIdeas } from '@/composables/useIdeas.ts'
import IdeaCard from '@/components/ideas/IdeaCard.vue'
import IdeasFilter from '@/components/ideas/IdeasFilter.vue'
import IdeasPagination from '@/components/ideas/IdeasPagination.vue'

const { ideaStore } = useIdeas()
</script>

<template>
  <div class="w-full px-[10%] mx-auto flex flex-col gap-12 py-12">
    <IdeasFilter />
    <div v-if="ideaStore.loading" class="min-h-screen flex justify-center items-center">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
    <div
      v-else-if="ideaStore.ideas.length === 0"
      class="w-full min-h-screen text-center py-12 flex items-center justify-center flex-col gap-4"
    >
      <h1 class="text-text-secondary font-bold text-4xl">No ideas found</h1>
      <p class="text-text-secondary text-xl font-normal">
        Try adjusting your filters or check back later.
      </p>
    </div>
    <div v-else class="flex flex-wrap justify-center gap-10">
      <div
        v-for="idea in ideaStore.ideas"
        :key="idea.id"
        class="w-full lg:w-[23%] flex-shrink-0"
      >
        <IdeaCard :idea="idea" />
      </div>
    </div>
    <IdeasPagination v-if="ideaStore.ideas.length > 0" />
  </div>
</template>
