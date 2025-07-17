import { defineStore } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

export const useNavbarStore = defineStore('navbar', () => {
  const isVisible = ref(true)
  const lastScrollY = ref(0)
  const isScrollingUp = ref(false)
  const atTopOfPage = ref(true)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    isScrollingUp.value = currentScrollY < lastScrollY.value
    atTopOfPage.value = currentScrollY <= 10
    isVisible.value = atTopOfPage.value || isScrollingUp.value
    lastScrollY.value = currentScrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isVisible, isScrollingUp, atTopOfPage }
})
