<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  stack: {
    type: Array as () => string[],
    required: true
  },
  demo: {
    type: String,
    required: true
  },
  repository: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container__card">
    <div class="card__img">
      <img class="img" :src="img" alt="kkk">
    </div>
    <div class="card__content">
      <h2 class="content__title">{{ title }}</h2>
      <p class="content__info">{{ description }}</p>
      <p class="content__stack">
        <strong class="stack__title">Stack:</strong>
        <strong class="stack__stack" v-for="st in stack" v-bind:key="st">{{ st }}</strong>
      </p>
    </div>
    <div class="card__buttons">
      <a class="buttons__link" :href="demo" target="_blank">Demo</a>
      <a class="buttons__link" :href="repository" target="_blank">Repository</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container__card {
  grid-column: span 12;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--light-gray);
  background-color: var(--dark-gray);
  border-radius: 1rem;

  @media screen and (min-width: 1230px) and (max-width: 1500px) {
    grid-column: span 6;
  }

  @media screen and (min-width: 1500px) {
    grid-column: span 4;
  }

  .card__img {
    position: relative;
    height: auto;
    overflow: hidden;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: var(--green-opaque);

    .img {
      width: 100%;
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
</style>