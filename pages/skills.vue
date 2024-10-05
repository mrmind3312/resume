<script setup>
import { ref, computed } from 'vue';

const skills = ref([
  { name: 'Vue.js', level: 'Expert', description: 'Advanced frontend framework' },
  { name: 'React', level: 'Advanced', description: 'Popular UI library' },
  { name: 'Node.js', level: 'Intermediate', description: 'Server-side JavaScript runtime' },
  { name: 'Python', level: 'Expert', description: 'Versatile programming language' },
  { name: 'Docker', level: 'Beginner', description: 'Containerization platform' },
  { name: 'GraphQL', level: 'Intermediate', description: 'API query language' },
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
