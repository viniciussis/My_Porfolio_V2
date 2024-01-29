<script setup lang="ts">
import { ref } from 'vue';
import SkillBar from '../components/SkillBar.vue';
import SkillCircle from '../components/SkillCircle.vue';

const stackSkills = ref([
  {
    id: 6,
    name: "MySQL",
    percent: "90",
    level: "advanced"
  },
  {
    id: 8,
    name: "PostgreSQL",
    percent: "90",
    level: "advanced"
  },
  {
    id: 9,
    name: "React",
    percent: "90",
    level: "advanced"
  },
  {
    id: 2,
    name: "Javascript",
    percent: "90",
    level: "advanced"
  },
  {
    id: 3,
    name: "Vue",
    percent: "90",
    level: "advanced"
  },
  {
    id: 11,
    name: "html, css  & Sass",
    percent: "90",
    level: "advanced"
  },
  {
    id: 4,
    name: "Java",
    percent: "60",
    level: "intermediate"
  },
  {
    id: 1,
    name: "Typescript",
    percent: "60",
    level: "intermediate"
  },
  {
    id: 5,
    name: "Node",
    percent: "60",
    level: "intermediate"
  },
  {
    id: 7,
    name: "MongoDB",
    percent: "60",
    level: "intermediate"
  },
  {
    id: 10,
    name: "Python",
    percent: "25",
    level: "beginner"
  },
])
const softSkills = ref([
  { id: 1, name: 'Communication' },
  { id: 2, name: 'Problem Solving' },
  { id: 3, name: 'Teamwork' },
  { id: 4, name: 'Adaptability' },
  { id: 5, name: 'Initiative' },
  { id: 6, name: 'Time Management' },
  { id: 7, name: 'Continuous Learning' },
  { id: 8, name: 'Attention to Detail' },
  { id: 9, name: 'Critical Thinking' },
  { id: 10, name: 'Leadership' },
]);
</script>

<template>
  <main class="skills">
    <h2 class="sectionTitle">stack</h2>
    <h3 class="skills__subtitle">Delve into the technologies I master in full-stack development!</h3>
    <section class="skills__stack">
      <SkillBar class="stack__skillbar" :level="skill.level" v-bind:key="skill.id" v-for="skill in stackSkills" :name="skill.name"
        :percent="skill.percent" />
    </section>
    <h2 class="sectionTitle">soft skills</h2>
    <h3 class="skills__subtitle">Soft skills that I consider crucial and am constantly refining.</h3>
    <section class="skills__softSkills">
      <SkillCircle v-for="skill in softSkills" v-bind:key="skill.id" :name="skill.name" />
    </section>
    <h2 class="sectionTitle">certificates</h2>
    <section class="skills_certificates">
    </section>
  </main>
</template>

<style lang="scss" scoped>
.skills {
  padding: 2.5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  .skills__subtitle {
    font-size: 1.75rem;
    text-align: center;
    font-weight: 700;
  }

  .skills__stack {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    justify-items: center;
    margin-bottom: 2rem;
  }

  .skills__softSkills {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .skills_certificates {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  @media screen and (max-width: 550px) {
    padding: 2.5rem 2rem;

    .skills__subtitle{
      font-size: 1.25rem;
    }
  }
}
</style>
