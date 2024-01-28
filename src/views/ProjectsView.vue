<script setup lang="ts">

</script>

<template>
  <main class="projects">
    <h2 class="sectionTitle">Projects</h2>
    <div class="projects__container">
      <div class="container__card">
        <div class="card__img">
          <img class="img" src="../assets/projects/Cookin'Up.png" alt="kkk">
        </div>
        <div class="card__content">
          <h2 class="content__title">Title</h2>
          <p class="content__info"> A blog for all developers. You can create your account, and start publishing your
            articles right away. Articles update in real-time and therefore there is no frustration of continually
            deploying your site once you finish writing a new article.
          </p>
          <p class="content__stack">
            <strong class="stack__title">Stack:</strong><strong class="stack__stack">asjkdfhas</strong><strong
              class="stack__stack">asjkdfhas</strong><strong class="stack__stack">asjkdfhas</strong><strong
              class="stack__stack">asjkdfhas</strong><strong class="stack__stack">asjkdfhas</strong><strong
              class="stack__stack">asjkdfhas</strong>
          </p>
        </div>
        <div class="card__buttons">
          <a class="buttons__link">Demo</a>
          <a class="buttons__link">Repository</a>
        </div>
      </div>
      <div class="container__card">
        <div class="card__img">
          <img class="img" src="../assets/projects/Virtual-Space.png" alt="kkk">
        </div>
        <div class="card__content">
          <h2 class="content__title">Title</h2>
          <p class="content__info"> A blog for all developers. You can create your account, and start publishing your
            articles right away. Articles update in real-time and therefore there is no frustration of continually
            deploying your site once you finish writing a new article.
          </p>
          <p class="content__stack">
            <strong class="stack__title">Stack:</strong><strong class="stack__stack">asjkdfhas</strong><strong
              class="stack__stack">asjkdfhas</strong><strong class="stack__stack">asjkdfhas</strong><strong
              class="stack__stack">asjkdfhas</strong><strong class="stack__stack">asjkdfhas</strong><strong
              class="stack__stack">asjkdfhas</strong>
          </p>
        </div>
        <div class="card__buttons">
          <a class="buttons__link">Demo</a>
          <a class="buttons__link">Repository</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.projects {
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin: 0 4rem;
  align-items: center;

  &__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;

    .container__card {
      grid-column: span 12;
      display: flex;
      flex-direction: column;
      border: 1px solid var(--light-gray);
      background-color: var(--dark-gray);
      border-radius: 1rem;

      @media (min-width: 950px) {
        grid-column: span 6;
      }

      @media (min-width: 1500px) {
        grid-column: span 4;
      }

      .card__img {
        position: relative;
        height: 300px;
        overflow: hidden;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        background-color: var(--green-opaque);

        .img {
          width: 100%;
          height: auto;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          object-fit: cover;
          transition: 0.5s ease-in-out;

          &:hover {
            transform: scale(0.95);
          }
        }
      }

      .card__content {
        margin-top: 0.75rem;
        padding: 0.5rem 1rem;
        flex: 1;

        .content__title {
          margin-bottom: 0.5rem;
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 1px;
          color: var(--color-heading);
        }

        .content__info {
          margin-bottom: 0.75rem;
          color: var(--color-text);
        }

        .content__stack {
          margin-bottom: 0.75rem;

          .stack__title {
            font-weight: bold;
            font-size: 1.25rem;
            color: var(--color-text);
          }

          .stack__stack {
            display: inline-flex;
            flex-wrap: wrap;
            padding: 0.25rem 1rem;
            margin: 0.25rem;
            border-radius: 0.8rem;
            font-weight: 700;
            background-color: var(--light-gray);
            color: var(--dark-black);
          }
        }
      }

      .card__buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin: 1rem;

        .buttons__link {
          background-color: var(--green-opaque);
          color: var(--color-text);
          padding: 0.5rem 1.75rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          border-radius: 0.5rem;
          transition: 0.5s ease-in-out;

          &:hover {
            background-color: var(--green);
            transform: scale(1.05);
          }
        }
      }
    }

    @media (min-width: 768px) {
      gap: 12px;
    }

    @media (min-width: 576px) {
      padding: 0 16px;
    }
  }
}
</style>