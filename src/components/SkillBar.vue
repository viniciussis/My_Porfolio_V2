<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  percent: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="skillBar">
    <div class="skillBar__name">{{ name }}</div>
    <div class="skillBar__bar">
      <div class="skillBar__percentage" :style="{width: `${percent}%`}">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skillBar {
  max-width: 30rem;
  width: 100%;

  .skillBar__name {
    font-size: 1.25rem;
    text-transform: capitalize;
    font-weight: 700;
    color: var(--color-text);
  }

  .skillBar__bar {
    height: 1rem;
    background-color: var(--dark-gray);
    border-radius: 0.25rem;
    width: 100%;

    .skillBar__percentage {
      height: 1rem;
      border-radius: 0.25rem;
      background: linear-gradient(to left, var(--green), var(--green-opaque));
      position: relative;
    }
  }
}
</style>