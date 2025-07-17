import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useIdeaStore } from '@/stores/ideaStore'

export function useIdeas() {
  const ideaStore = useIdeaStore()
  const route = useRoute()
  const router = useRouter()

  const syncParamsWithStore = () => {
    const pageNumber = Number(route.query['page[number]'] || 1)
    const pageSize = Number(route.query['page[size]'] || 10)
    const sort = String(route.query['sort'] || '-published_at')

    if (pageNumber !== ideaStore.currentPage) ideaStore.currentPage = pageNumber
    if (pageSize !== ideaStore.pageSize) ideaStore.pageSize = pageSize
    if (sort !== ideaStore.sortOrder) ideaStore.sortOrder = sort
  }

  const updateUrlParams = () => {
    router.replace({
      query: {
        page: ideaStore.currentPage.toString(),
        per_page: ideaStore.pageSize.toString(),
        'page[number]': ideaStore.currentPage.toString(),
        'page[size]': ideaStore.pageSize.toString(),
        'append[]': ['small_image', 'medium_image'],
        sort: ideaStore.sortOrder
      }
    })
  }

  watch(() => [ideaStore.currentPage, ideaStore.pageSize, ideaStore.sortOrder], updateUrlParams)
  watch(() => route.query, syncParamsWithStore, { deep: true })
  onMounted(() => {
    syncParamsWithStore()
    ideaStore.fetchIdeasData()
  })

  return {ideaStore}
}
