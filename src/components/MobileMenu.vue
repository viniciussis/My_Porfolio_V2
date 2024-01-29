<script lang="ts" setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref } from 'vue';

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
function closeMenu() {
  isMenuOpen.value = false;
}

</script>

<template>
  <div class="mobile-menu" @click="toggleMenu">
    <Icon class="menu__icon" icon="material-symbols:menu" width="1.5rem" height="1.5rem" />
    <div v-if="isMenuOpen" class="menu">
      <RouterLink to="/about" @click="closeMenu">About</RouterLink>
      <RouterLink to="/skills" @click="closeMenu">Skills</RouterLink>
      <RouterLink to="/projects" @click="closeMenu">Projects</RouterLink>
      <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-menu {
  display: none;
  flex-direction: column;
  border: 1px solid var(--green);
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &:hover {
    .menu__icon {
      color: var(--green);
    }
  }

  @media screen and (max-width: 840px) {
    display: flex;
  }

  .menu__icon {
    color: var(--light);
    transition: 0.5s;
  }

  .menu {
    display: flex;
    flex-direction: column;
    background-color: var(--dark-black-opaque);
    position: absolute;
    top: 4.5rem;
    right: 3rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--green);
    z-index: 100;
    border-radius: 0.25rem;

    & a {
      padding: 0.35rem 3rem;
      color: var(--light);
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
    }

    & a:hover {
      color: var(--green);
      background-color: var(--light-cream);
    }

    @media screen and (min-width: 500px) {
      right: 3.5rem;
    }
  }
}
</style>