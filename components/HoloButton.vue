<script setup>
import { ref, onMounted } from "vue";

// Define props for dynamic label and link
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});

// Define the neon cyberpunk colors
const colors = [
  "#00FF9C", // Neon Green
  "#00D4FF", // Electric Blue
  "#FFEA00", // Cyber Yellow
  "#9A00FF", // Neon Purple
];

// Ref to store a random selected color
const buttonColor = ref("");

// Function to select a random color on component mount
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  buttonColor.value = colors[randomIndex];
};

// Use onMounted to select a color as soon as the component is loaded
onMounted(() => {
  getRandomColor();
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="holo-button"
    :style="{ '--neon-color': buttonColor }"
  >
    {{ label }}
  </NuxtLink>
</template>

<style scoped>
.holo-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--neon-color);
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid var(--neon-color);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  text-align: center;
  cursor: pointer;
}

/* Neon Glow */
.holo-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  box-shadow: 0 0 15px var(--neon-color), 0 0 30px var(--neon-color);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.holo-button:hover::before {
  opacity: 1;
}

.holo-button:hover {
  transform: scale(1.05);
  color: #fff;
  background: var(--neon-color);
  box-shadow: 0 0 10px #fff, 0 0 20px var(--neon-color);
}
</style>
