<template>
  <section class="hero">
    <div class="hero__image"></div>
    <div class="hero__info">
      <strong>Bienvenido a la mejor plataforma de turismo</strong>
      <p class="hero__description">
        Encuentra las mejores actividades turísticas en un solo lugar
      </p>
      <router-link
        to="/activities"
        class="bg-primary text-white px-4 py-2 rounded-full"
        >Ver actividades</router-link
      >
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  margin-bottom: 2rem;
  & .hero__image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(../../assets/images/hero.png);
    background-size: cover;
    background-position: initial;
    background-repeat: no-repeat;
    filter: brightness(0.5);
  }
  & .hero__info {
    height: 60vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
      font-size: 2rem;
      color: var(--kt-white);
      text-align: center;
    }
    p {
      color: var(--kt-white);
      text-align: center;
      margin: 1rem 0;
    }
  }
}
</style>
