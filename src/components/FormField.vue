<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "text"
  },
  value: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <label class="input" :for="label">
    <input class="input__field" :type="type" :value="value" :id="label" placeholder=" " />
    <span class="input__label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
.input {
  position: relative;
  width: 100%;

  &__label {
    position: absolute;
    left: 0;
    top: 0;
    padding: calc(0.5rem * 0.75) calc(1.5rem * .5);
    margin: calc(0.5rem * 0.75 + 3px) calc(1.5rem * .5);
    transform: translate(0, 0);
    transform-origin: 0 0;
    background-color: var(--color-background);
    transition: transform 120ms ease-in;
    font-weight: bold;
    line-height: 1.2;
  }

  &__field {
    box-sizing: border-box;
    display: block;
    width: 100%;
    font-size: 1rem;
    border: 3px solid var(--green-opaque);
    padding: calc(0.5rem * 1.5) 1.5rem;
    outline: none;
    color: currentColor;
    background-color: transparent;
    border-radius: 0.25rem;

    &:focus,
    &:not(:placeholder-shown) {
      border-color: var(--green);

      &+.input__label {
        transform: translate(.25rem, -65%) scale(.9);
        color: var(--green);
      }
    }
  }
}
</style>