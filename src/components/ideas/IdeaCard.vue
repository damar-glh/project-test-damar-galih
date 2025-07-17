<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { dataType } from '@/services/ideatype'

const props = defineProps<{ idea: dataType }>()
const imageLoaded = ref(false)
const imageError = ref(false)
const imageUrl = ref('')

onMounted(() => {
  setImageUrl()
})

const setImageUrl = () => {
  if (props.idea.small_image?.length > 0) {
    imageUrl.value = props.idea.small_image[0].url
  } else if (props.idea.medium_image?.length > 0) {
    imageUrl.value = props.idea.medium_image[0].url
  }
}

const handleImageLoad = () => {
  imageLoaded.value = true
}
const handleImageError = () => {
  imageError.value = true
}

const formatDate = (dateString: string) => {
  return new Date(dateString)
    .toLocaleDateString('id-ID', {
      day: 'numeric',
      year: 'numeric',
      month: 'long'
    })
    .toUpperCase()
}
</script>

<template>
  <div class="bg-background rounded-lg shadow-md overflow-hidden flex flex-col h-full">
    <div class="relative p-[40%] bg-background overflow-hidden">
      <template v-if="imageUrl && !imageError">
        <img
          v-show="imageLoaded"
          :src="imageUrl"
          loading="lazy"
          @load="handleImageLoad"
          @error="handleImageError"
          crossorigin="anonymous"
          alt="Idea Thumbnail"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        />
        <div v-show="!imageLoaded" class="absolute inset-0 flex items-center justify-center">
          <div class="animate-pulse w-full h-full bg-slate-200"></div>
        </div>
      </template>
      <div v-else class="absolute inset-0 flex items-center justify-center bg-slate-200">
        <span class="text-gray-400">No image available</span>
      </div>
    </div>
    <div class="p-10 flex flex-col flex-grow gap-4">
      <p class="text-text-secondary font-medium text-lg">
        {{ formatDate(idea.published_at) }}
      </p>
      <h1 class="font-bold text-2xl line-clamp-3">{{ idea.title }}</h1>
    </div>
  </div>
</template>