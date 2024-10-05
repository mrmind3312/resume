<template>
  <div class="relative min-h-screen overflow-hidden bg-gray-900">
    <nav class="z-10 flex justify-between items-center p-4 bg-opacity-80">
      <NuxtLink to="/" class="text-green-400 hover:underline">Home</NuxtLink>
      <div class="text-gray-400">Skills</div>
    </nav>

    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div
      class="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-600 to-purple-800 opacity-25"
    ></div>
    <div class="absolute inset-0 matrix-effect"></div>

    <main class="relative z-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
// You can import and setup any data or components here if needed
</script>

<style scoped>
.matrix-effect {
  background-image: url("https://path_to_your_matrix_background_image");
  background-size: cover;
  animation: rain 0.2s linear infinite;
}

@keyframes rain {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>
