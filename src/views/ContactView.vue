<script setup lang="ts">
import FormField from '../components/FormField.vue'
import TextArea from '../components/TextArea.vue';
import { Icon } from '@iconify/vue/dist/iconify.js';
import emailjs from '@emailjs/browser'
import { ref } from 'vue';

const serviceID: string = process.env.SERVICE_ID || '';
const templateID: string = process.env.TEMPLATE_ID || '';
const publicKey: string = process.env.PUBLIC_KEY || '';

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const sendEmail = (e: Event) => {
  e.preventDefault();
  emailjs.send(
    serviceID,
    templateID,
    { name, email, subject, message },
    publicKey
  )
}

</script>

<template>
  <main class="contact">
    <h2 class="sectionTitle">contact me</h2>
    <div class="contact__container">
      <form ref="form" class="contact__form" autocomplete="off" @submit.prevent="sendEmail">
        <FormField required label="Name" />
        <FormField required label="Email" type="email" />
        <FormField required label="Subject" />
        <TextArea required label="Message"></TextArea>
        <button type="submit">Send Feedback</button>
      </form>
      <div class="contact__social">
        <h2 class="contact__subtitle">Contact e-mail</h2>
        <p class="contact__para">vinicius01012@gmail.com</p>
        <h2 class="contact__subtitle">Social Media</h2>
        <a class="contact__link" href="https://github.com/viniciussis">
          <Icon class="contact__icon" icon="mdi:github" width="2.5rem" height="2.5rem" />
          /viniciussis
        </a>
        <a class="contact__link" href="https://www.linkedin.com/in/viniciussis/">
          <Icon class="contact__icon" icon="mingcute:linkedin-fill" width="2.5rem" height="2.5rem" />
          /viniciussis
        </a>
        <a class="contact__link" href="https://www.instagram.com/_devinicius/">
          <Icon class="contact__icon" icon="lets-icons:insta-fill" width="2.5rem" height="2.5rem" />
          /_devinicius
        </a>
        <a class="contact__link" href="https://twitter.com/_devinicius">
          <Icon class="contact__icon" icon="ri:twitter-x-fill" width="2.5rem" height="2.5rem" />
          /_devinicius
        </a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.contact {
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  .contact__container {
    display: flex;
    width: 100%;
    padding: 0 8rem;
    gap: 4rem;

    .contact__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: 100%;
      max-width: 36rem;

      button {
        color: currentColor;
        padding: 0.5rem calc(1.5rem * 2);
        background: var(--green-opaque);
        border: none;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        font-weight: 700;
        cursor: pointer;
        transition: 1s;

        &:hover {
          transform: scale(1.1);
          background-color: var(--green);
        }
      }
    }

    .contact__social {
      padding: 0 2rem;

      .contact__subtitle {
        color: var(--green);
        font-size: 2rem;
        font-weight: 600;
      }

      .contact__para {
        color: var(--color-text);
        font-size: 1.15rem;
      }

      .contact__link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.15rem;

        .contact__icon {
          transition: 0.5s;
        }
      }

      .contact__link:hover .contact__icon {
        color: var(--green);
      }
    }
  }

  @media screen and (max-width: 1050px) {
    .contact__container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }

    .contact__social {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
}
</style>