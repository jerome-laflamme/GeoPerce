<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <Navbar />
  <div class="error-container">
    <h1 class="error404-primary">Page non trouvé, erreur 404</h1>
    <RouterLink to="/" class="error404-secondary">Retourner à la page d'acceuil</RouterLink>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(../assets/img/homepage-background.jpg);
}
.error404-primary {
}
.error404-secondary {
  color: var(--light-grey);
}
</style>
