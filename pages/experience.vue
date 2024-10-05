<script setup>
import { ref } from "vue";

// Example data for work experience using user-provided info
const experiences = [
  {
    company: "Company A",
    position: "Frontend Developer",
    duration: "Jan 2019 - Dec 2020",
    description:
      "Worked on developing responsive web applications using Vue.js and Tailwind CSS.",
    achievements: [
      "Improved site performance by 30%",
      "Led a team of 4 developers",
    ],
    technologies: ["VueJS", "Tailwind CSS", "JavaScript"],
  },
  {
    company: "Company B",
    position: "Software Engineer",
    duration: "Jan 2021 - Dec 2022",
    description: "Developed backend services using Node.js and MongoDB.",
    achievements: [
      "Designed and implemented RESTful APIs",
      "Optimized database queries",
    ],
    technologies: ["NodeJS", "MongoDB", "ExpressJS"],
  },
  {
    company: "Company C",
    position: "AI Researcher",
    duration: "Jan 2023 - Present",
    description:
      "Conducting research on machine learning algorithms and their applications.",
    achievements: [
      "Published 3 papers in reputed journals",
      "Developed a new ML model for prediction",
    ],
    technologies: ["Python", "TensorFlow", "Keras"],
  },
];

const selectedExperience = ref(null);

const selectExperience = (experience) => {
  if (selectedExperience.value === experience) {
    selectedExperience.value = null; // Deselect if already selected
  } else {
    selectedExperience.value = experience; // Select the new experience
  }
};
</script>

<template>
  <div class="h-screen flex flex-col items-center p-4">
    <h1 class="text-5xl font-bold text-white mb-8">Work Experience</h1>
    <div class="experience-container grid grid-cols-2 gap-6">
      <div class="company-names">
        <ul>
          <li
            v-for="experience in experiences"
            :key="experience.company"
            class="company-name"
            @click="selectExperience(experience)"
          >
            {{ experience.company }}
          </li>
        </ul>
      </div>
      <div class="details">
        <div
          v-for="experience in experiences"
          :key="experience.company + '-details'"
          class="experience-details"
          :class="{ active: selectedExperience === experience }"
        >
          <h2 class="text-xl text-white">{{ experience.position }}</h2>
          <p class="text-gray-300">{{ experience.duration }}</p>
          <p class="text-gray-300">{{ experience.description }}</p>
          <ul class="achievements">
            <li
              v-for="(achievement, index) in experience.achievements"
              :key="index"
              class="text-gray-400"
            >
              - {{ achievement }}
            </li>
          </ul>
          <div class="technology-tags">
            <span
              v-for="(tech, index) in experience.technologies"
              :key="index"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-container {
  width: 100%;
  max-width: 1200px;
}

.company-name {
  cursor: pointer;
  padding: 12px;
  background-color: rgba(0, 255, 128, 0.5); /* Neon green background */
  border: 2px solid rgba(0, 255, 128, 0.8); /* Neon green border */
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.2s;
  color: black; /* Dark text for contrast */
}

.company-name:hover {
  opacity: 0.9; /* Slightly decrease opacity on hover */
}

.experience-details {
  display: none; /* Initially hide details */
  padding: 12px;
  background-color: rgba(0, 255, 255, 0.5); /* Neon cyan background */
  border: 2px solid rgba(0, 255, 255, 1); /* Bright neon cyan border */
  border-radius: 8px;
}

.experience-details.active {
  display: block; /* Show details if active */
}

.achievements {
  margin-top: 8px;
}

.technology-tags {
  margin-top: 12px;
}

.tech-tag {
  display: inline-block;
  background-color: rgba(255, 0, 255, 0.7); /* Neon magenta */
  border: 2px solid rgba(255, 0, 255, 1); /* Bright neon magenta */
  color: black; /* Dark text for contrast */
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 4px;
  margin-top: 4px;
}

.tech-tag:hover {
  opacity: 0.9; /* Slightly decrease opacity on hover */
}
</style>
