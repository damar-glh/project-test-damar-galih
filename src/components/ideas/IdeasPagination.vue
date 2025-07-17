<script setup lang="ts">
import { computed } from 'vue'
import { useIdeaStore } from '@/stores/ideaStore'

const ideaStore = useIdeaStore()

const pages = computed(() => {
  const totalPages = ideaStore.totalPages
  const currentPage = ideaStore.currentPage
  const maxVisiblePages = 7
  const pagesArray = []

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i)
    }
    return pagesArray
  }
  pagesArray.push(1)

  if (currentPage > 3) {
    pagesArray.push('...')
  }

  const startPage = Math.max(2, currentPage - 1)
  const endPage = Math.min(totalPages - 1, currentPage + 1)
  for (let i = startPage; i <= endPage; i++) {
    pagesArray.push(i)
  }

  if (currentPage < totalPages - 2) {
    pagesArray.push('...')
  }
  pagesArray.push(totalPages)

  return pagesArray
})

const changePage = (page: number | string) => {
  if (typeof page === 'number') {
    ideaStore.setCurrentPage(page)
  }
}

const goToPrevPage = () => {
  if (ideaStore.currentPage > 1) {
    ideaStore.setCurrentPage(ideaStore.currentPage - 1)
  }
}

const goToNextPage = () => {
  if (ideaStore.currentPage < ideaStore.totalPages) {
    ideaStore.setCurrentPage(ideaStore.currentPage + 1)
  }
}

const goToFirstPage = () => {
  ideaStore.setCurrentPage(1)
}

const goToLastPage = () => {
  ideaStore.setCurrentPage(ideaStore.totalPages)
}
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-center">
      <button
        @click="goToFirstPage"
        :disabled="ideaStore.currentPage === 1"
        class="px-3 py-1 mr-2 focus:outline-none flex items-center"
        :class="ideaStore.currentPage === 1 ? 'cursor-not-allowed' : ''"
      >
        <div class="flex h-6 w-6">
          <svg
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="#000000"
              ></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </div>
      </button>
      <button
        @click="goToPrevPage"
        :disabled="ideaStore.currentPage === 1"
        class="px-3 py-1 mr-2 focus:outline-none flex items-center"
        :class="ideaStore.currentPage === 1 ? 'cursor-not-allowed' : ''"
      >
        <div class="flex h-4 w-4">
          <svg
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </div>
      </button>
      <div class="flex">
        <button
          v-for="page in pages"
          :key="page"
          @click="changePage(page)"
          class="w-8 h-8 flex items-center justify-center mx-1 rounded-md focus:outline-none"
          :class="{
            'bg-primary text-background': page === ideaStore.currentPage,
            'hover:bg-gray-100': page !== ideaStore.currentPage && page !== '...',
            'cursor-default': page === '...'
          }"
          :disabled="page === '...'"
        >
          {{ page }}
        </button>
      </div>
      <button
        @click="goToNextPage"
        :disabled="ideaStore.currentPage === ideaStore.totalPages"
        class="px-3 py-1 ml-2 focus:outline-none flex items-center"
        :class="ideaStore.currentPage === ideaStore.totalPages ? 'cursor-not-allowed' : ''"
      >
        <div class="flex h-4 w-4">
          <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path></g></svg>
        </div>
      </button>
      <button
        @click="goToLastPage"
        :disabled="ideaStore.currentPage === ideaStore.totalPages"
        class="px-3 py-1 mr-2 focus:outline-none flex items-center"
        :class="ideaStore.currentPage === ideaStore.totalPages ? 'cursor-not-allowed' : ''"
      >
        <div class="flex h-6 w-6">
          <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path></g></svg>
          <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path></g></svg>
        </div>
      </button>
    </div>
  </div>
</template>
