<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { BannerProps } from '@/components/banner/BannerProps.ts'

const props = withDefaults(defineProps<BannerProps>(), {
  subtitle: '',
  slantHeight: 120
})

const sectionRef = ref<HTMLElement | null>(null)
const imageOffset = ref(0)
const textOffset = ref(0)

const handleScroll = () => {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const imageRatio = 0.3
  const textRatio = 0.15

  if (rect.bottom > 0 && rect.top < windowHeight) {
    imageOffset.value = rect.top * imageRatio
    textOffset.value = rect.top * textRatio
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const { imageUrl, title, subtitle, slantHeight } = props
</script>

<template>
  <section class="relative w-full overflow-hidden h-[70dvh]">
    <div
      class="absolute inset-0 bg-cover bg-center transition-transform duration-150 will-change-transform"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="absolute inset-0 bg-black/50 z-10"></div>
    <div
      class="relative z-20 flex h-full items-center justify-center text-center text-background px-6"
      :style="{ transform: `translateY(${textOffset}px)` }"
      ref="sectionRef"
    >
      <div>
        <h1 class="text-7xl font-medium">{{ title }}</h1>
        <p v-if="subtitle" class="text-xl font-normal">{{ subtitle }}</p>
      </div>
    </div>
    <svg
      class="absolute bottom-0 left-0 w-full z-30"
      :style="{ height: `${slantHeight}px` }"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill="white" points="100,50 100,100 100,100 0,100" />
    </svg>
  </section>
</template>
