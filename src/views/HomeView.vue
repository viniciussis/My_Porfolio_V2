<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <main class="home">
    <div class="home__content">
      <h1 class="home__title">Hi!👋 I'm Vinícius</h1>
      <h2 class="home__subtitle">Full Stack Web Developer</h2>
      <p class="home__para">I am a full stack developer from Bahia, Brazil, dedicated to creating versatile solutions
        across various domains, with a focus on building responsive, accessible, and inclusive digital experiences.</p>
    </div>
    <div class="home__links">
      <a class="home__link" href="">
        <Icon class="home__icon" icon="mdi:github" width="1.5rem" height="1.5rem" />GitHub
      </a>
      <a class="home__link" href="">
        <Icon class="home__icon" icon="mingcute:linkedin-fill" width="1.5rem" height="1.5rem" />LinkedIn
      </a>
      <a class="home__link" href="">
        <Icon class="home__icon" icon="lets-icons:insta-fill" width="1.5rem" height="1.5rem" />Instagram
      </a>
      <a class="home__link" href="">
        <Icon class="home__icon" icon="ri:twitter-x-fill" width="1.5rem" height="1.5rem" />Twitter
      </a>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.home {
  margin: 4.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  .home__content {
    max-width: 60%;

    .home__title {
      color: var(--color-text);
      font-size: 5rem;
      font-weight: 700;
    }

    .home__subtitle {
      font-size: 2rem;
      font-weight: 600;
      color: var(--green);
    }

    .home__para {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }

  .home__links {
    display: flex;
    gap: 1.25rem;

    .home__link {
      font-size: 1.25rem;
      color: var(--color-text);
      border: 2px solid var(--green);
      border-radius: 1rem;
      padding: 0.55rem 2rem;
      display: flex;
      gap: 0.25rem;
      align-items: center;

      .home__icon {
        transition: 0.5s;
      }
    }

    .home__link:hover .home__icon {
      color: var(--green);
    }
  }
}
</style>