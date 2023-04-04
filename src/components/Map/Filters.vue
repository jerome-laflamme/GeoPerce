<script setup lang="ts">
import Filter from "./Filter.vue";
const filters = ["camping", "restaurant", "hiking", "poi"];
</script>

<template>
  <div class="filters-container">
    <h2>Carte Intéractive :</h2>
    <Filter v-for="filter in filters" :category="filter" />
    <div class="text-box">
      <p>
        Bienvenue sur la carte interactive de GéoPercé! Que vous soyez à la
        recherche de la meilleure destination de vacances, de randonnée, de
        camping ou de toute autre activité de plein air, nous sommes là pour
        vous aider à trouver la destination idéale.
      </p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: var(--light-grey);
  text-decoration: underline;
  font-size: 1.5rem;
  margin: 25px 0;
  font-family: "Galada", cursive;
}
.filters-container {
  width: 350px;
  margin: 10% 0 0 5%;
  padding: 2rem;
  background-color: #2e3e2ce8;
  border-radius: 15px;
  position: relative;
  z-index: 10;
}

.text-box {
  margin: 40px 0 10px;
  background-color: var(--light-grey);
  padding: 20px;
  border-radius: 5px;
}

@media screen and (max-width: 992px) {
  .filters-container {
    margin: 10% 3% 0 auto;
    width: 450px;
  }
  .text-box {
    display: none;
  }
  .filters-container h2 {
    font-size: 45px;
  }
  .filters-container p {
    font-size: 25px;
  }
}
@media screen and (max-height: 725px) {
  .text-box {
    display: none;
  }
}
</style>
