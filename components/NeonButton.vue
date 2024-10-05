<script setup>
import { computed } from "vue";

const props = defineProps({
  company: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["select"]);

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
  backgroundColor: props.isActive
    ? randomNeonColor.value
    : randomNeonColor.value.replace("1)", "0.2)"),
  boxShadow: props.isActive ? `0 0 10px ${randomNeonColor.value}` : "none",
}));
</script>

<template>
  <li
    class="company-name"
    :class="{ active: isActive }"
    @click="emit('select', company)"
  >
    {{ company }}
    <span class="neon-line" :style="neonStyle"></span>
  </li>
</template>

<style scoped>
.company-name {
  cursor: pointer;
  padding: 12px;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  transition: color 0.3s;
  font-weight: bold;
}

.company-name:hover,
.company-name.active {
  color: rgba(255, 255, 255, 1);
}

.neon-line {
  content: "";
  display: block;
  height: 2px;
  transition: all 0.3s ease;
  margin-top: 5px;
}
</style>
