<script setup>
import { ref } from "vue";

// Educational institutions and descriptions using user's actual data
const institutions = [
  {
    name: "Universidad Mariano Galvez de Guatemala",
    description: "Software Engineering - 2016",
  },
  {
    name: "KINAL",
    description: "High School Bachelor of Science in Computer Science - 2013",
  },
];

const selectedInstitution = ref(institutions[0].name);

const selectInstitution = (name) => {
  selectedInstitution.value = name;
};

const getDescription = (name) => {
  const institution = institutions.find((inst) => inst.name === name);
  return institution ? institution.description : "";
};
</script>

<template>
  <div class="h-screen flex flex-col items-center p-4">
    <h1 class="text-5xl font-bold text-white mb-8">Education</h1>
    <div class="tabs flex space-x-6">
      <ul class="flex space-x-4">
        <li
          v-for="institution in institutions"
          :key="institution.name"
          :class="['tab', { active: selectedInstitution === institution.name }]"
          @click="selectInstitution(institution.name)"
        >
          {{ institution.name }}
        </li>
      </ul>
    </div>
    <div
      class="tab-content mt-8 p-6 bg-gray-900 bg-opacity-90 rounded-lg border-2 border-cyan-500 shadow-lg"
    >
      <h2 class="text-3xl text-white">{{ selectedInstitution }}</h2>
      <p class="text-gray-300 mt-2">
        {{ getDescription(selectedInstitution) }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  position: relative;
}

.tab {
  cursor: pointer;
  padding: 12px 24px;
  background-color: rgba(0, 255, 128, 0.5); /* Neon green */
  border: 2px solid rgba(0, 255, 128, 0.8); /* Neon green border */
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.2s;
  color: black; /* Dark text for contrast */
}

/* Different vibrant neon colors for each tab */
.tab:nth-child(1) {
  background-color: rgba(0, 255, 255, 0.7); /* Neon cyan */
  border: 2px solid rgba(0, 255, 255, 1); /* Bright neon cyan border */
}

.tab:nth-child(2) {
  background-color: rgba(255, 0, 255, 0.7); /* Neon magenta */
  border: 2px solid rgba(255, 0, 255, 1); /* Bright neon magenta border */
}

.tab:nth-child(3) {
  background-color: rgba(255, 255, 0, 0.7); /* Neon yellow */
  border: 2px solid rgba(255, 255, 0, 1); /* Bright neon yellow border */
}

.tab:hover {
  opacity: 0.9; /* Slightly decrease opacity on hover */
  transform: scale(1.05); /* Slight scale on hover */
}

.active {
  background-color: rgba(
    0,
    255,
    128,
    0.8
  ); /* Brighter neon green for active tab */
  color: black; /* Dark text for active tab for visibility */
}

.tab-content {
  width: 400px; /* Fixed width */
  height: 200px; /* Fixed height */
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px); /* Optional: add blur effect */
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.4); /* Neon glow effect */
}
</style>
