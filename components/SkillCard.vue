<script setup>
import { ref, defineProps, computed } from "vue";

// Define props to receive skill data
const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const isFlipped = ref(false);

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value;
};

// Cyberpunk-inspired colors with rgba
const colors = [
  'from-cyan-500/70 to-blue-500/70',
  'from-purple-500/70 to-pink-500/70',
  'from-yellow-500/70 to-red-500/70',
  'from-green-500/70 to-teal-500/70',
];

const cardColor = computed(() => {
  return colors[props.index % colors.length];
});

const getExpertiseOrder = (level) => {
  switch (level) {
    case 'Expert': return 1;
    case 'Advanced': return 2;
    case 'Intermediate': return 3;
    case 'Beginner': return 4;
    default: return 5;
  }
};

const expertiseOrder = computed(() => getExpertiseOrder(props.skill.level));
</script>

<template>
  <div
    class="skill-card rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-glow"
    :class="[cardColor, { 'is-flipped': isFlipped }]"
    :style="{ order: expertiseOrder }"
    @click="toggleFlip"
  >
    <div class="skill-inner">
      <div class="skill-face skill-front">
        <h2 class="text-2xl font-bold text-white mb-2">{{ skill.name }}</h2>
        <p class="text-gray-200 text-lg">{{ skill.level }}</p>
      </div>
      <div class="skill-face skill-back">
        <p class="text-white">{{ skill.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  position: relative;
  width: 300px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
  background-image: linear-gradient(45deg, var(--tw-gradient-from), var(--tw-gradient-to));
  border: 2px solid transparent;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
              0 0 10px rgba(255, 255, 255, 0.5),
              0 0 15px rgba(255, 255, 255, 0.5),
              0 0 20px var(--neon-color),
              0 0 35px var(--neon-color),
              0 0 40px var(--neon-color),
              0 0 50px var(--neon-color),
              0 0 75px var(--neon-color);
}

.skill-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.skill-card.is-flipped .skill-inner {
  transform: rotateY(180deg);
}

.skill-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.skill-front {
  z-index: 2;
}

.skill-back {
  transform: rotateY(180deg);
}

.skill-card:hover {
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.8),
              0 0 10px rgba(255, 255, 255, 0.8),
              0 0 15px rgba(255, 255, 255, 0.8),
              0 0 20px var(--neon-color),
              0 0 35px var(--neon-color),
              0 0 40px var(--neon-color),
              0 0 50px var(--neon-color),
              0 0 75px var(--neon-color);
}

/* Cyberpunk-inspired text glow */
.skill-card h2 {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

/* Firefox-specific styles */
@-moz-document url-prefix() {
  .skill-face {
    transform-style: preserve-3d;
  }

  .skill-front, .skill-back {
    transform: translateZ(1px);
  }

  .skill-back {
    transform: rotateY(180deg) translateZ(1px);
  }
}
</style>
