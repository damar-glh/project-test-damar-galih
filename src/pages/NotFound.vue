<template>
  <div
    class="w-full h-screen flex flex-col gap-6 items-center justify-center bg-background text-center"
  >
    <h1 class="text-5xl font-black text-primary">404 - Page Not Found</h1>
    <p class="text-lg text-text-secondary max-w-2xl">
      The page you are looking for does not exist. Please check the URL or return to the homepage.
      You can also try searching for the content you need.
    </p>
    <router-link to="/" class="bg-primary text-background p-4">Go back to Home</router-link>
  </div>
</template>
