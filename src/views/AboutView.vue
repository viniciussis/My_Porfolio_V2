<script setup lang="ts">
</script>

<template>
  <main class="about">
    <h2 class="sectionTitle">about me</h2>
    <section class="about__myself">
      <div>
        <h3 class="about__subtitle">Hi! I'm Vinícius Santos</h3>
        <p class="about__para">I'm a software developer passionate about programming and web development committed to
          driving innovation and
          excellence in every project I engage in.</p>
        <p class="about__para">My educational journey led me to study at one of the best teaching colleges in Bahia, IFBA,
          and also at the
          largest online technology school in Brazil, Alura. I am constantly seeking new challenges and opportunities to
          grow and learn.</p>
        <p class="about__para">My key skills include extensive knowledge in programming languages such as Java, Python,
          Javascript, and
          Typescript. I also have expertise in web technologies like HTML, CSS, and SQL, as well as frameworks like Vue
          and ReactJs. I am proficient in version control using GIT & GitHub and have knowledge of databases such as
          MySQL, MongoDB, and PostgreSQL. I believe that teamwork is the key to success, and I take pride in collaborating
          with colleagues to achieve exceptional results.
        </p>
      </div>
      <div class="about__images">
        <img class='about__prof' src='../assets/profile/Profile06.jpg' alt="profile" aria-hidden="true" />
      </div>
    </section>
    <h2 class="sectionTitle">education</h2>
    <section class="about__education">
      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>Alura </h2>
            <h3>2021 - Present</h3>
            <p>Alura is the largest online technology school in Brazil, offering courses in programming, front-end,
              DevOps, mobile, Data Science, UX & Design, Artificial Intelligence, and Management & Innovation.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>IFBA University</h2>
            <h3>2019 - Present</h3>
            <p>Bachelor of System Information. The IFBA, Federal Institute of Education, Science, and Technology of
              Bahia, is a federal public institution that offers professional technical courses at the higher education
              level in various cities of Bahia, Brazil.
            </p>
          </div>
        </div>
      </div>
    </section>
    <h2 class="sectionTitle">hobbies</h2>
    <section class="about__hobbies">
      <p class="about__para">Whenever I'm not immersed in coding, I tend to dedicate my time to activities that contribute
        to my personal
        growth.
        Some of these activities include, but are not limited to:</p>
      <p class="about__para"><strong>Training:</strong> To be honest, I have a deep passion for training. It's one of
        those things I can hardly let a day pass
        by
        without spending at least 30 minutes engaging in a workout session. The feeling of pushing my limits and
        witnessing
        progress is truly invigorating.</p>
      <p class="about__para"><strong>Reading:</strong> If you're not an avid reader, you might not understand my love for
        books. I find solace in the world of
        literature, where every page turned is a new adventure. Whether it's fiction or non-fiction, the joy of gaining
        knowledge and exploring different perspectives is unmatched.</p>
      <p class="about__para"><strong>Cooking:</strong> I've never been a fan of fast food, and I firmly believe in the joy
        of preparing my own meals.
        Experimenting with ingredients and creating delicious dishes brings me immense satisfaction. While not everyone
        may
        appreciate my culinary creations as much as I do, the verdict of my taste buds reigns supreme in this matter 😎.
      </p>
      <p class="about__para"><strong>Traveling:</strong> Exploring new places has always been a source of inspiration for
        me. Whether it's discovering the
        beauty
        of nature or immersing myself in different cultures, traveling opens up a world of possibilities. Each journey is
        an
        opportunity to broaden my horizons and create lasting memories.</p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.about {
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  .about__myself {
    padding: 0 5rem;
    display: grid;
    grid-template-columns: 5fr 3fr;
    gap: 2rem;

    .about__images {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .about__prof {
        z-index: 1;
        width: 25vw;
        border-radius: 50%;
      }
    }

    .about__subtitle {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-text);
      margin-bottom: 1rem;
    }
  }

  .about__hobbies {
    padding: 0 8rem;

  }

  .about__para {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: justify;

    strong {
      color: var(--color-heading);
      font-weight: 700;
      font-size: 1.35rem;
    }
  }

  .about__education {
    .timeline {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
    }

    .timeline::after {
      content: '';
      position: absolute;
      width: 6px;
      background-color: var(--dark-gray);
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
    }

    .container {
      padding: 10px 40px;
      position: relative;
      background-color: inherit;
      width: 50%;
    }

    .container::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      right: -17px;
      background-color: var(--light);
      border: 4px solid var(--green);
      top: 15px;
      border-radius: 50%;
      z-index: 1;
    }

    .left {
      left: 0;
    }

    .right {
      left: 50%;
    }

    .left::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      right: 30px;
      border: medium solid var(--dark-gray);
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent var(--dark-gray);
    }

    .right::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      left: 30px;
      border: medium solid var(--dark-gray);
      border-width: 10px 10px 10px 0;
      border-color: transparent var(--dark-gray) transparent transparent;
    }

    .right::after {
      left: -12px;
    }

    .left::after {
      right: -12px;
    }

    .content {
      padding: 20px 30px;
      background-color: var(--dark-gray);
      position: relative;
      border-radius: 6px;

      h2 {
        color: var(--color-heading);
        font-weight: 700;
        font-size: 1.5rem;
      }

      h3 {
        color: var(--light);
        font-weight: 600;
        font-size: 1.25rem;
        padding-bottom: 0.5rem;
      }

      p {
        color: var(--light);
      }
    }

    @media screen and (max-width: 600px) {
      .timeline::after {
        left: 31px;
      }

      .container {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
      }

      .container::before {
        left: 60px;
        border: medium solid var(--dark-gray);
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--dark-gray) transparent transparent;
      }

      .left::after,
      .right::after {
        left: 17px;
      }

      .right {
        left: 0%;
      }
    }
  }
}
</style>
