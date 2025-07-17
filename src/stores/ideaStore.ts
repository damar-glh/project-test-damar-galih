import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchIdeas } from '@/services/ideaService'
import type { dataType, metaType } from '@/services/ideatype'

export const useIdeaStore = defineStore('idea', () => {
  const state = {
    ideas: ref<dataType[]>([]),
    meta: ref<metaType | null>(null),
    loading: ref(false),
    error: ref(''),
    pageSize: ref(10),
    currentPage: ref(1),
    sortOrder: ref('-published_at')
  }

  const getters = {
    totalPages: computed(() => state.meta.value?.last_page || 1),
    totalItems: computed(() => state.meta.value?.total || 0),
    currentRange: computed(() => {
      if (!state.meta.value) return '0-0'
      return `${state.meta.value.from}`+" - " +`${state.meta.value.to}`
    })
  }

  const actions = {
    async fetchIdeasData() {
      state.loading.value = true
      state.error.value = ''
      try {
        const response = await fetchIdeas({
          pageNumber: state.currentPage.value,
          pageSize: state.pageSize.value,
          sort: state.sortOrder.value
        })
        state.ideas.value = response.data
        state.meta.value = response.meta
      } catch (err: any) {
        state.error.value = err?.message || 'Failed to fetch ideas'
        console.error('Error fetching ideas:', err)
      } finally {
        state.loading.value = false
      }
    },

    setPageSize(size: number) {
      state.pageSize.value = size
      if (state.currentPage.value !== 1) {
        state.currentPage.value = 1
      } else {
        actions.fetchIdeasData()
      }
    },

    setCurrentPage(page: number) {
      state.currentPage.value = page
      actions.fetchIdeasData()
    },

    setSortOrder(order: string) {
      state.sortOrder.value = order
      if (state.currentPage.value !== 1) {
        state.currentPage.value = 1
      } else {
        actions.fetchIdeasData()
      }
    }
  }

  return {
    ...state,
    ...getters,
    ...actions
  }
})
