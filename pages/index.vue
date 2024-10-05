<script setup>
import { onMounted, ref } from "vue";

definePageMeta({
  name: "Welcome to my portfolio",
  description: "This is the home page of my portfolio",
});

const canvasRef = ref(null);

// Matrix effect logic on mounted
onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "01";
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
  <div
    class="w-screen h-screen bg-black text-green-400 flex flex-col justify-center items-center"
  >
    <!-- Matrix Effect Canvas Background -->
    <canvas
      ref="canvasRef"
      class="fixed top-0 left-0 z-0 w-full h-full"
    ></canvas>

    <!-- Welcome Section (Layered on top of canvas) -->
    <div class="z-10 text-center max-w-2xl px-4">
      <HoloImage />

      <h1 class="text-5xl font-bold mb-6 text-white drop-shadow-md">
        Welcome, I'm Josué Mente
      </h1>
      <p class="text-lg mb-8 text-gray-300 drop-shadow-lg">
        Senior Web Developer with extensive experience in designing, building,
        and maintaining high-quality web applications. I specialize in backend
        and frontend technologies and have a passion for delivering impactful
        digital solutions.
      </p>

      <!-- Action Buttons -->
      <div class="grid grid-cols-2 gap-6 max-w-md mx-auto">
        <HoloButton label="Contact" to="/contact" />
        <HoloButton label="Skills" to="/skills" />
        <HoloButton label="Education" to="/education" />
        <HoloButton label="Experience" to="/experience" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container styling */
.w-screen {
  width: 100vw;
}
.h-screen {
  height: 100vh;
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.bg-black {
  background-color: #000;
}
.text-green-400 {
  color: #4ade80; /* Tailwind green-400 */
}

/* Matrix canvas effect */
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* Text styles */
.text-center {
  text-align: center;
}
.text-5xl {
  font-size: 3rem;
}
.font-bold {
  font-weight: 700;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.max-w-2xl {
  max-width: 42rem;
}

/* Button grid */
.grid {
  display: grid;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.gap-6 {
  gap: 1.5rem;
}

/* Button styles */
.bg-green-500 {
  background-color: #22c55e; /* Tailwind green-500 */
}
.text-white {
  color: #fff;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.transition-all {
  transition: all 0.3s ease;
}
.transform {
  transform: scale(1);
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
.focus\:ring-4:focus {
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.5);
}
.focus\:outline-none:focus {
  outline: none;
}

/* Drop shadows for text readability */
.drop-shadow-md {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
}
.drop-shadow-lg {
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
}
</style>
