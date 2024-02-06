<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import projects from '../data/projectData';

</script>

<template>
  <main class="projects">
    <h2 class="sectionTitle">Projects</h2>
    <div class="projects__container">
      <ProjectCard v-for="project in projects" v-bind:key="project.title" :demo="project.demo"
        :description="project.description" :img="project.img" :stack="project.stack" :title="project.title"
        :repository="project.repository" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.projects {
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  justify-content: center;
  margin: 0 4rem;
  align-items: center;

  .projects__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
  }
}
</style>