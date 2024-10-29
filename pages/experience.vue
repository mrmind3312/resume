<script setup>
import { ref, computed } from "vue";
import NeonButton from "~/components/NeonButton.vue";
import NeonTag from "~/components/NeonTag.vue";
import jsonJobs from "~/storage/jobs.json";

const experiences = ref(jsonJobs);
const selectedExperience = ref(null);
const isModalOpen = ref(false);

const openModal = (experience) => {
  selectedExperience.value = experience;
  isModalOpen.value = true;
};

const closeModal = () => {
  selectedExperience.value = null;
  isModalOpen.value = false;
};

const getSelectedExperience = computed(() => selectedExperience.value);
</script>

<template>
  <div class="min-h-screen flex justify-center items-center p-4">
    <div class="experience-container w-full max-w-[90%] md:max-w-[70%] p-8">
      <h1 class="text-5xl font-bold text-white mb-8 text-center">
        Work Experience
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div
          v-for="experience in experiences"
          :key="experience.company"
          class="experience-card bg-black/30 backdrop-blur-md rounded-lg p-4 cursor-pointer transition-all duration-500"
          @click="openModal(experience)"
        >
          <div
            class="experience-front p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 class="text-2xl font-bold text-white mb-1">
                {{ experience.company }}
              </h2>
              <p class="text-gray-300">{{ experience.duration }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for displaying selected experience details -->
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <h2 class="text-2xl font-bold text-white mb-3">
            {{ getSelectedExperience.position }}
          </h2>
          <p class="text-gray-300 mb-5 leading-relaxed">
            {{ getSelectedExperience.description }}
          </p>
          <h3 class="text-xl font-semibold text-white mb-3">Achievements:</h3>
          <ul class="achievements mb-5 space-y-2">
            <li
              v-for="(achievement, index) in getSelectedExperience.achievements"
              :key="index"
              class="text-gray-400 pl-4 relative"
            >
              <span
                class="absolute left-0 top-2 w-2 h-2 bg-cyan-400 rounded-full"
              ></span>
              {{ achievement }}
            </li>
          </ul>
          <h3 class="text-xl font-semibold text-white mb-3">Technologies:</h3>
          <div class="technology-tags">
            <NeonTag
              v-for="(tech, index) in getSelectedExperience.technologies"
              :key="index"
              :tag="tech"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-container {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.experience-card {
  position: relative;
  height: 200px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal-content {
  background: #1a1a1a;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  transform: scale(0.5);
  animation: zoomIn 0.3s forwards;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.technology-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
