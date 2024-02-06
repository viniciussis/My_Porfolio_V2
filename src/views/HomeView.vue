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
      <a class="home__link" href="https://github.com/viniciussis" target="_blank">
        <Icon class="home__icon" icon="mdi:github" width="1.5rem" height="1.5rem" />GitHub
      </a>
      <a class="home__link" href="https://www.linkedin.com/in/viniciussis/" target="_blank">
        <Icon class="home__icon" icon="mingcute:linkedin-fill" width="1.5rem" height="1.5rem" />LinkedIn
      </a>
      <a class="home__link" href="https://www.instagram.com/_devinicius/" target="_blank">
        <Icon class="home__icon" icon="lets-icons:insta-fill" width="1.5rem" height="1.5rem" />Instagram
      </a>
      <a class="home__link" href="https://twitter.com/_devinicius" target="_blank">
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
  gap: 1.65rem;
  justify-content: center;
  align-items: center;

  .home__content {
    max-width: 64%;

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
      text-align: justify;
    }

    @media screen and (max-width: 500px) {
      max-width: 75%;

      .home__title{
        font-size: 3rem;
        text-align: center;
      }

      .home__subtitle{
        text-align: center;
        font-size: 1.5rem;
      }

      .home__para{
        font-size: 1rem;
        text-align: center;
      }
    }
    

    @media screen and (min-width: 500px) and (max-width: 700px) {
      max-width: 75%;

      .home__title{
        font-size: 4rem;
        text-align: center;
      }

      .home__subtitle{
        text-align: center;
      }
    }

  }

  .home__links {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1.25rem;
    align-content: center;

    .home__link {
      font-size: 1.25rem;
      color: var(--color-text);
      border: 2px solid var(--green);
      border-radius: 1rem;
      padding: 0.55rem 2rem;
      display: flex;
      gap: 0.25rem;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: 1365px) {
        grid-column: span 3;
      }

      @media screen and (min-width: 700px) and (max-width:1365px) {
        grid-column: span 6;
      }

      @media screen and (min-width: 540px) and (max-width: 700px) {
        grid-column: span 6;
        padding: 0.55rem 1.75rem;
      }

      @media screen and (max-width: 540px) {
        grid-column: span 12;
        padding: 0.55rem 4rem;
      }

      &:hover {
        transform: scale(1.1);
      }

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