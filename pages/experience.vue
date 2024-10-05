<script setup>
import { ref, computed } from "vue";
import NeonButton from "~/components/NeonButton.vue";
import NeonTag from "~/components/NeonTag.vue";

// Ejemplo de datos para la experiencia laboral utilizando tu información
const experiences = [
  {
    company: "LOMAX Technologies S.A.",
    position: "Senior Software Developer",
    duration: "Mayo 2018 - Actualidad",
    description:
      "I work as a Senior Software Developer, responsible for the development and maintenance of the company and clients software products developed by us.",
    achievements: [
      "Improved site performance by 30%",
      "Directed a team of 4 developers",
      "Teach and prepare new developers to the team in 3 months.",
      "Help a german startup to have their MVP in the market in 6 months and get the first investment round successfully.",
      "Help to change all product focus from B2C to B2B2C for a german startup and gain a second investment round successfully.",
      "Increase company product quality and help it to grow up in the software market in the first 3 years.",
      "Pitched a new product to a german investor and get accepted the investment.",
      "Help to solve problems in critical clients like CAR24 GmbH.",
    ],
    technologies: [
      "Vue.js",
      "Bulma CSS",
      "Ruby on Rails",
      "Ruby",
      "NodeJS",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Amazon Web Services",
      "PHP",
      "Laravel",
      "Linux",
    ],
  },
  {
    company: "Hyrd GmbH",
    position: "Senior Web Developer",
    duration: "August 2019 - October 2023",
    description:
      "Develop main business platform for this german startup focused on cover the talent adquisition problems for companies and students, company was a partner of LOMAX Technologies.",
    achievements: [
      "Designed and implemented RESTful APIs",
      "Optimize and improve database design and architecture.",
      "Teach and prepare new developers to the team in 3 months.",
      "Release MVP in 6 months and get the first investment round successfully.",
      "Help to change all product focus from B2C to B2B2C and get a second investment round successfully.",
      "Onboard new developers to the team and help then to improve their skills to be productive in the first month.",
      "Create the bases for a new product that help students to find a job easier.",
      "Implement usage of AI models to predict student performance and help then to get a job easier.",
      "Help to contract a new CTO for the company and improve the team structure.",
      "Help and support SOC (Security Operations Center) team to improve processes and tools to manage security incidents.",
    ],
    technologies: [
      "Ruby on Rails",
      "Python",
      "AWS",
      "Vue.js",
      "Nuxt.js",
      "PostgreSQL",
      "RDS",
      "Linux",
      "Bulma CSS",
    ],
  },
  {
    company: "Publicidad Comercial MullenLowe / Publicentro de Guatemala",
    position: "Full Stack Developer",
    duration: "March 2016 - May 2018",
    description:
      "Principal developer for this company, responsible of manage, develop and maintain the software products for their clients.",
    achievements: [
      "Increase work quality in a 60%",
      "Increase work performance in a 50%",
      "Increase client satisfaction in a 70%",
      "Onboard new developers to the team and help them to improve their skills to be productive in the first two months.",
      "Pitch and gain with new clients like Alimentos Maravilla S.A.",
      "Pitch and gain new project from new clients like IRTRA S.A. and Cervecería Centro Americana S.A.",
      "Help to improve the company structure and team to be more productive and efficient.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "Linux",
      "JavaScript",
      "Vue.js",
      "Bulma CSS",
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "Java Android",
      "Ionic",
    ],
  },
  {
    company: "Kronos S.A.",
    position: "Full Stack Developer",
    duration: "August 2014 - March 2016",
    description:
      "Principal developer for this company, responsible of manage, develop and maintain the software products for their clients.",
    achievements: [
      "Design, develop and maintain software main software product.",
      "Release first version of the software product to the market in 3 months.",
      "Pitch and gain new clients.",
      "Pitch and gain the first big project with a new client.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "Linux",
      "JavaScript",
      "Bootstrap CSS",
      "JQuery",
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "Java Android",
      "REST API",
      "SOAP API",
    ],
  },
];

const selectedCompany = ref(null);

const selectExperience = (company) => {
  selectedCompany.value = selectedCompany.value === company ? null : company;
};

const getSelectedExperience = computed(() => {
  return (
    experiences.find((exp) => exp.company === selectedCompany.value) || null
  );
});
</script>

<template>
  <div class="min-h-screen flex justify-center items-center p-4">
    <div
      class="experience-container w-full max-w-[60%] backdrop-blur-md bg-black/30 rounded-lg p-8"
    >
      <h1 class="text-5xl font-bold text-white mb-8 text-center">
        Experiencia Laboral
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <h2 class="text-xl text-white mb-2">
              {{ getSelectedExperience.position }}
            </h2>
            <p class="text-gray-300 mb-2">
              {{ getSelectedExperience.duration }}
            </p>
            <p class="text-gray-300 mb-4">
              {{ getSelectedExperience.description }}
            </p>
            <ul class="achievements mb-4">
              <li
                v-for="(
                  achievement, index
                ) in getSelectedExperience.achievements"
                :key="index"
                class="text-gray-400 mb-1"
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
  </div>
</template>

<style scoped>
.experience-container {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.company-names {
  padding: 20px;
}

.experience-details {
  display: none;
  padding: 12px;
  background-color: rgba(0, 255, 255, 0.1);
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.experience-details.active {
  display: block;
}

.achievements {
  list-style-type: none;
  padding-left: 0;
}

.technology-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
