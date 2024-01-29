<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="skill">
    <div class="skill__circle"></div>
    <h3 class="skill__name">{{ name }}</h3>
  </div>
</template>

<style scoped lang="scss">
.skill {
  position: relative;
  width: 10rem;
  height: 10rem;
  float: left;
  margin: 1rem 0;

  .skill__name {
    text-align: center;
    position: absolute;
    color: var(--color-font);
    font-size: 1.05rem;
    font-weight: 700;
    text-transform: uppercase;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .skill__circle {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, var(--green), var(--green-opaque));
    outline: 2px dashed var(--green);
    color: var(--color-font);
    border-radius: 50%;
    padding: 0.5rem;
    background-clip: content-box;
    animation: spin 10s linear infinite;
  }

  &:active .skill__circle {
    animation: spin 2s linear infinite;
  }

  @media screen and (max-width: 550px) {
    width: 7rem;
    height: 7rem;

    .skill__name {
      font-size: 0.75rem;
    }
  }
}

@keyframes spin {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>