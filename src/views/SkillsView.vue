<script setup lang="ts">
import { ref } from 'vue';
import SkillBar from '../components/SkillBar.vue';
const stackSkills = ref([
  {
    id: 1,
    name: "Typescript",
    percent: "50"
  },
  {
    id: 2,
    name: "Javascript",
    percent: "90"
  },
  {
    id: 3,
    name: "Vue",
    percent: "90"
  },
  {
    id: 4,
    name: "Java",
    percent: "75"
  },
  {
    id: 5,
    name: "Node",
    percent: "75"
  },
  {
    id: 6,
    name: "MySQL",
    percent: "75"
  },
  {
    id: 7,
    name: "MongoDB",
    percent: "50"
  },
  {
    id: 8,
    name: "PostgreSQL",
    percent: "90"
  },
  {
    id: 9,
    name: "React",
    percent: "90"
  },
  {
    id: 10,
    name: "Python",
    percent: "25"
  },
  {
    id: 11,
    name: "SASS",
    percent: "90"
  }
])
</script>

<template>
  <main class="skills">
    <h2 class="sectionTitle">stack</h2>
    <h3 class="skills__subtitle">Delve into the technologies I master in full-stack development!</h3>
    <section class="skills__stack">
      <SkillBar v-bind:key="skill.id" v-for="skill in stackSkills" :name="skill.name" :percent="skill.percent"/>
    </section>
    <h2 class="sectionTitle">soft skills</h2>
  </main>
</template>

<style lang="scss" scoped>
.skills {
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  .skills__subtitle{
    font-size: 1.75rem;
    font-weight: 700;
  }
  .skills__stack{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 0 5rem;
    justify-items: center;
    margin-bottom: 2rem;
  }
}
</style>
