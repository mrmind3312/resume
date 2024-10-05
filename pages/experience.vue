<script setup>
import { ref, computed } from "vue";
import NeonButton from "~/components/NeonButton.vue";
import NeonTag from "~/components/NeonTag.vue";

// Ejemplo de datos para la experiencia laboral utilizando tu información
const experiences = [
  {
    company: "Company A",
    position: "Frontend Developer",
    duration: "Ene 2019 - Dic 2020",
    description:
      "Trabajé en el desarrollo de aplicaciones web responsivas utilizando Vue.js y Tailwind CSS.",
    achievements: [
      "Mejoré el rendimiento del sitio en un 30%",
      "Dirigí un equipo de 4 desarrolladores",
    ],
    technologies: ["VueJS", "Tailwind CSS", "JavaScript"],
  },
  {
    company: "Company B",
    position: "Software Engineer",
    duration: "Ene 2021 - Dic 2022",
    description: "Desarrollé servicios backend utilizando Node.js y MongoDB.",
    achievements: [
      "Diseñé e implementé APIs RESTful",
      "Optimizé consultas de bases de datos",
    ],
    technologies: ["NodeJS", "MongoDB", "ExpressJS"],
  },
  {
    company: "Company C",
    position: "AI Researcher",
    duration: "Ene 2023 - Presente",
    description:
      "Conduzco investigaciones sobre algoritmos de aprendizaje automático y sus aplicaciones.",
    achievements: [
      "Publicé 3 artículos en revistas reconocidas",
      "Desarrollé un nuevo modelo de ML para predicciones",
    ],
    technologies: ["Python", "TensorFlow", "Keras"],
  },
];

const selectedCompany = ref(null);

const selectExperience = (company) => {
  selectedCompany.value = selectedCompany.value === company ? null : company;
};

const getSelectedExperience = computed(() => {
  return experiences.find((exp) => exp.company === selectedCompany.value) || null;
});
</script>

<template>
  <div class="h-screen flex flex-col items-center p-4">
    <h1 class="text-5xl font-bold text-white mb-8">Experiencia Laboral</h1>
    <div class="experience-container grid grid-cols-2 gap-6">
      <div class="company-names">
        <ul>
          <NeonButton
            v-for="experience in experiences"
            :key="experience.company"
            :company="experience.company"
            :is-active="selectedCompany === experience.company"
            @select="selectExperience"
          />
        </ul>
      </div>
      <div class="details">
        <div v-if="getSelectedExperience" class="experience-details active">
          <h2 class="text-xl text-white">
            {{ getSelectedExperience.position }}
          </h2>
          <p class="text-gray-300">{{ getSelectedExperience.duration }}</p>
          <p class="text-gray-300">{{ getSelectedExperience.description }}</p>
          <ul class="achievements">
            <li
              v-for="(achievement, index) in getSelectedExperience.achievements"
              :key="index"
              class="text-gray-400"
            >
              - {{ achievement }}
            </li>
          </ul>
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
  width: 100%;
  max-width: 1200px;
}

.company-names {
  padding: 20px;
}

.experience-details {
  display: none; /* Ocultar detalles inicialmente */
  padding: 12px;
  background-color: rgba(0, 255, 255, 0.5); /* Fondo neón cian */
  border: 2px solid rgba(0, 255, 255, 1); /* Borde neón cian brillante */
  border-radius: 8px;
  margin-top: 12px;
}

.experience-details.active {
  display: block; /* Mostrar detalles si está activo */
}

.achievements {
  margin-top: 8px;
}

.technology-tags {
  margin-top: 12px;
}

/* Remove the .tech-tag styles as they're no longer needed */
</style>
