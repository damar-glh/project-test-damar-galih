<script setup lang="ts"></script>

<template>
  <footer class="w-full bg-primary text-background py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2023. All rights reserved.</p>
        </div>
        <div class="flex space-x-4">
          <router-link to="/work" class="hover:text-text-primary"> Work </router-link>
          <router-link to="/services" class="hover:text-text-primary"> Service </router-link>
          <router-link to="/contact" class="hover:text-text-primary"> Contact </router-link>
          <router-link to="/about" class="hover:text-text-primary"> About </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
