<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
});

const isHovered = ref(false);

const neonColors = [
  "rgba(255, 0, 0, 1)", // Red
  "rgba(0, 255, 0, 1)", // Green
  "rgba(0, 0, 255, 1)", // Blue
  "rgba(255, 255, 0, 1)", // Yellow
  "rgba(255, 0, 255, 1)", // Magenta
  "rgba(0, 255, 255, 1)", // Cyan
];

const randomNeonColor = computed(() => {
  const randomIndex = Math.floor(Math.random() * neonColors.length);
  return neonColors[randomIndex];
});

const neonStyle = computed(() => ({
  color: isHovered.value ? randomNeonColor.value : 'rgba(255, 255, 255, 0.7)',
  textShadow: isHovered.value ? `0 0 5px ${randomNeonColor.value}` : 'none',
}));

const underlineStyle = computed(() => ({
  backgroundColor: isHovered.value ? randomNeonColor.value : 'rgba(255, 255, 255, 0.3)',
  boxShadow: isHovered.value ? `0 0 5px ${randomNeonColor.value}` : 'none',
}));
</script>

<template>
  <span
    class="neon-tag"
    :style="neonStyle"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    {{ tag }}
    <span class="neon-underline" :style="underlineStyle"></span>
  </span>
</template>

<style scoped>
.neon-tag {
  position: relative;
  display: inline-block;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
}

.neon-underline {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  transition: all 0.3s ease;
}
</style>
