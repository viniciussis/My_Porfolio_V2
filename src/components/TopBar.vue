<script lang="ts" setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="topBar">
    <a class="topBar__home" href="/"><img src="../assets/Brand/PNG/Logo sm white png.png" alt="logo devinicius"></a>
    <nav>
      <ul class="topBar__navigator">
        <li class="topBar__link">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="topBar__link">
          <RouterLink to="/skills">Skills</RouterLink>
        </li>
        <li class="topBar__link">
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li class="topBar__link">
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.topBar {
  position: sticky;
  top: 0;
  z-index: 30;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  border-bottom: 1px solid var(--dark-gray);
  background-color: var(--dark-black-opaque);

  .topBar__home {
    display: flex;
  }

  .topBar__navigator {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;

    .topBar__link {
      font-size: 1.25rem;
    }

    .topBar__link:hover a{
      color: var(--green);
    }
  }
}
</style>