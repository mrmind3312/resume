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
          class="experience-card bg-white/55 backdrop-blur-md rounded-lg p-4 cursor-pointer transition-all duration-500 text-center pt-auto"
          @click="openModal(experience)"
        >
          <h2 class="text-2xl font-bold text-white mb-1">
            {{ experience.company }}
          </h2>
          <p class="text-gray-300 has-text-weight-bold">
            {{ experience.duration }}
          </p>
        </div>
      </div>

      <!-- Modal for displaying selected experience details -->
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div
          class="modal-content max-w-5xl mx-auto p-6 bg-white/70 rounded-lg backdrop-blur-lg relative"
        >
          <h2 class="text-2xl font-bold text-green-950 mb-3 text-center">
            {{ getSelectedExperience.position }}
          </h2>
          <div class="modal-body flex flex-col md:flex-row gap-6">
            <!-- Left Column: Position, Description, and Technologies -->
            <div class="flex-1">
              <p class="text-green-800 mb-5 leading-relaxed">
                {{ getSelectedExperience.description }}
              </p>
              <h3 class="text-xl font-semibold text-green-950 mb-3">
                Technologies:
              </h3>
              <div class="technology-tags flex flex-wrap gap-2">
                <NeonTag
                  v-for="(tech, index) in getSelectedExperience.technologies"
                  :key="index"
                  :tag="tech"
                />
              </div>
            </div>

            <!-- Right Column: Achievements -->
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-green-950 mb-3">
                Achievements:
              </h3>
              <ul class="achievements mb-5 space-y-2">
                <li
                  v-for="(
                    achievement, index
                  ) in getSelectedExperience.achievements"
                  :key="index"
                  class="text-green-700 pl-4 relative"
                >
                  <span
                    class="absolute left-0 top-2 w-2 h-2 bg-green-600 rounded-full"
                  ></span>
                  {{ achievement }}
                </li>
              </ul>
            </div>
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
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  padding: 20px;
  border-radius: 8px;
}

.technology-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.modal-body {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.modal-header {
  text-align: center;
  margin-bottom: 1rem;
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
</style>
