<script lang="ts" setup>
</script>

<template>
  <footer class="footer">
    <p class="footer__para">© Copyright | Project for web portfolio created by Vinícius Silva Santos | 2024</p>
  </footer>
</template>

<style scoped>

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 3rem;

  .footer__para {
    font-size: 1.05rem;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    padding: 3rem 2rem;
    .footer__para{
      font-size: 0.9rem;
    }
  }
}
</style>