import { defineStore } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

export const useNavbarStore = defineStore('navbar', () => {
  const state = {
    isVisible: ref(true),
    lastScrollY: ref(0),
    isScrollingUp: ref(false),
    atTopOfPage: ref(true)
  }

  const actions = {
    handleScroll() {
      const currentScrollY = window.scrollY
      state.isScrollingUp.value = currentScrollY < state.lastScrollY.value
      state.atTopOfPage.value = currentScrollY <= 10
      state.isVisible.value = state.atTopOfPage.value || state.isScrollingUp.value
      state.lastScrollY.value = currentScrollY
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', actions.handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', actions.handleScroll)
  })

  return {
    ...state,
    ...actions
  }
})