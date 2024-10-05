<script setup>
import { ref, computed } from 'vue';

const skills = ref([
  // Frontend Skills
  { name: 'Vue.js', level: 'Expert', description: 'Advanced frontend framework' },
  { name: 'React.js', level: 'Advanced', description: 'Popular UI library' },
  { name: 'ReactNative', level: 'Expert', description: 'Versatile mobile application framework' },
  { name: 'Tailwind CSS', level: 'Intermediate', description: 'Styling framework' },
  { name: 'Bulma CSS', level: 'Expert', description: 'Styling framework' },
  { name: 'Bootstrap CSS', level: 'Expert', description: 'Styling framework' },
  { name: 'Nuxt.js', level: 'Skillful', description: 'Advanced frontend framework' },
  { name: 'Next.js', level: 'Skillful', description: 'Advanced frontend framework' },

  // Backend Skills
  { name: 'Node.js', level: 'Expert', description: 'Server-side JavaScript runtime' },
  { name: 'Ruby', level: 'Expert', description: 'Versatile programming language' },
  { name: 'Ruby on Rails', level: 'Expert', description: 'Advanced web application framework' },
  { name: 'MySQL', level: 'Expert', description: 'Relational database management system' },
  { name: 'MariaDB', level: 'Expert', description: 'Relational database management system' },
  { name: 'PostgreSQL', level: 'Expert', description: 'Advanced relational database management system' },
  { name: 'MongoDB', level: 'Skillful', description: 'NoSQL database system' },
  { name: 'Firebase', level: 'Skillful', description: 'Backend as a Service' },
  { name: 'Amazon Web Services', level: 'Skillful', description: 'Amazon Cloud computing platform' },
  { name: 'Azure', level: 'Skillful', description: 'Microsoft Cloud computing platform' },
  { name: 'Linux', level: 'Skillful', description: 'Operating system' },
  { name: 'PHP', level: 'Expert', description: 'Server-side scripting language' },
  { name: 'Laravel', level: 'Expert', description: 'PHP web application framework' },

  // Other Skills
  { name: 'Prompt Engineering', level: 'Skillful', description: 'Prompt engineering' },

  // Soft Skills
  { name: 'Communication', level: 'Expert', description: 'Effective communication skills' },
  { name: 'Problem Solving', level: 'Expert', description: 'Ability to solve problems' },
  { name: 'Teamwork', level: 'Expert', description: 'Ability to work in a team' },
  { name: 'Leadership', level: 'Expert', description: 'Leadership skills' },
  { name: 'Time Management', level: 'Expert', description: 'Ability to manage time' },
  { name: 'Adaptability', level: 'Expert', description: 'Ability to adapt to new situations' },
  { name: 'Creativity', level: 'Expert', description: 'Creative thinking' },
  { name: 'Proactivity', level: 'Expert', description: 'Ability to be proactive' },
  { name: 'Empathy', level: 'Expert', description: 'Ability to empathize with others' },
]);

const shuffledSkills = computed(() => {
  return [...skills.value].sort(() => Math.random() - 0.5);
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8 text-white">My Skills</h1>
    <div class="skills-container flex flex-wrap justify-center gap-6">
      <SkillCard
        v-for="(skill, index) in shuffledSkills"
        :key="skill.name"
        :skill="skill"
        :index="index"
      />
    </div>
  </div>
</template>
