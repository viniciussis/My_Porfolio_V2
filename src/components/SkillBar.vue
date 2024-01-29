<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  percent: {
    type: String,
    required: true
  },
  level:{
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="skillBar">
    <div class="skillBar__name">
      <p>{{ name }}</p>
      <p class="name__level">{{ level }}</p>
    </div>
    <div class="skillBar__bar">
      <div class="skillBar__percentage" :style="{width: `${percent}%`, animation: `${level} 3s`}">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skillBar {
  grid-column: span 12;
  max-width: 30rem;
  width: 100%;

  .skillBar__name {
    font-size: 1.25rem;
    text-transform: capitalize;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    color: var(--color-text);

    .name__level {
      color: var(--green);
      font-weight: 700;
    }

    @media screen and (max-width:500px) {
      font-size: 1rem;

      .name__level{
        font-size: 1rem;
      }
    }
  }

  .skillBar__bar {
    background-color: var(--dark-gray);
    display: block;
    height: 1rem;
    outline: 3px solid var(--green-dark);
    border-radius: 0.25rem;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    margin: 0.15rem 0;

    .skillBar__percentage {
      height: 1rem;
      float: left;
      background: linear-gradient(to left, var(--green), var(--green-dark));
      position: relative;
    }

    @keyframes advanced {
      0%{
        width: 0%;
      }
      100%{
        width: 90%;
      }
    }
    @keyframes intermediate {
      0%{
        width: 0%;
      }
      100%{
        width: 60%;
      }
    }
    @keyframes beginner {
      0%{
        width: 0%;
      }
      100%{
        width: 25%;
      }
    }
  }

  @media screen and (min-width: 2200px){
    grid-column: span 3;
  }

  @media screen and (min-width: 1675px) and (max-width: 2200px){
    grid-column: span 4;
  }

  @media screen and (min-width: 1150px) and (max-width: 1675px){
    grid-column: span 6;
  }
}
</style>