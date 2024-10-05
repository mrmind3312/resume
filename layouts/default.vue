<script setup>
import { onMounted, ref } from "vue";

const canvasRef = ref(null);

// Matrix effect logic on mounted
onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "01ABCDFGHIJKLMNOPQRSTUVWXYZ";
  const fontSize = 16;
  const columns = canvas.width / fontSize; // number of columns for the rain
  const drops = Array.from({ length: columns }).fill(1); // initial y positions for the rain drops

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // translucent background to create trailing effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0, 255, 0, 0.3)"; // lighter green text with reduced opacity for subtle effect
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    });
  }

  const interval = setInterval(draw, 30);

  // Cleanup on component unmount
  return () => clearInterval(interval);
});
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-gray-900">
    <canvas
      ref="canvasRef"
      class="absolute top-0 left-0 w-full h-full"
    ></canvas>

    <nav
      class="relative z-10 flex justify-between items-center p-4 bg-opacity-80"
    >
      <NuxtLink
        v-if="$route.path !== '/'"
        to="/"
        class="text-green-400 hover:underline"
      >
        <Icon name="hugeicons:home-06" class="text-white" />
      </NuxtLink>
    </nav>

    <main class="relative z-10">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* Remove the .matrix-effect class and its associated styles */
</style>
