<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import MobileMenu from './MobileMenu.vue';

</script>

<template>
  <header class="topBar">
    <a class="topBar__logo" href="/"><img src="../assets/Brand/PNG/Logo sm white png.png" alt="logo devinicius"></a>
    <a class="topBar__mobile" href="/"><img src="../assets/Brand/PNG/mini logo md png.png" alt="logo devinicius"></a>
    <nav class="topBar__nav">
      <ul class="nav__desktop">
        <li class="desktop__link">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="desktop__link">
          <RouterLink to="/skills">Skills</RouterLink>
        </li>
        <li class="desktop__link">
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li class="desktop__link">
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </nav>
    <MobileMenu />
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
  gap: 1rem;
  padding: 2rem 4rem;
  border-bottom: 1px solid var(--dark-gray);
  background-color: var(--dark-black-opaque);

  .topBar__logo {
    display: flex;

    @media screen and (max-width: 375px) {
      display: none;      
    }
  }

  .topBar__mobile {
    display: none;
    height: 5rem;
    width: auto;

    @media screen and (max-width: 375px) {
      display: flex;      
    }
  }

  .nav__desktop {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;

    .desktop__link {
      font-size: 1.25rem;
    }

    .desktop__link:hover a {
      color: var(--green);
    }
  }

  @media screen and (max-width: 840px) {
    padding: 2rem 3.5rem;

    .nav__desktop {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 2rem 3rem;

    .nav__desktop {
      display: none;
    }
  }
}
</style>