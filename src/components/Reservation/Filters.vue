<script setup lang="ts">
import { ref, watch } from "vue";
import { useReservation } from "../../shared/stores/reservationStore";

const reservationStore = useReservation();

watch(
  () => [
    reservationStore.filters.services,
    reservationStore.filters.amp,
    reservationStore.filters.campLength,
  ],
  () => {
    useReservation().fetchCamps();
  }
);
</script>

<template>
  <div class="filters">
    <h2>Filtres</h2>
    <!-- TOP ROW -->
    <div class="filters-row">
      <!-- SERVICES -->
      <div class="filter">
        <h3 class="small-title">Services</h3>
        <select
          name="services"
          id="services"
          v-model="reservationStore.filters.services"
        >
          <option value="0">Tous</option>
          <option value="Sans-services">Sans services</option>
          <option value="Eau-seulement">Eau seulement</option>
          <option value="Eau-electricite">Eau et électricité</option>
          <option value="Eau-electricite-egouts">
            Eau, électricité et égouts
          </option>
        </select>
      </div>

      <!-- LENGTH -->
      <div class="filter length">
        <h3 class="small-title">Longeur</h3>
        <select
          name="campLength"
          id="campLength"
          v-model="reservationStore.filters.campLength"
        >
          <option value="0">Tous</option>
          <option v-for="i in 7" :value="i * 10">
            {{ i * 10 }} pieds et plus
          </option>
        </select>
      </div>

      <!-- AMP -->
      <div class="filter amp">
        <h3 class="small-title">Ampérage</h3>
        <select name="amp" id="amp" v-model="reservationStore.filters.amp">
          <option class="option-style" value="0">Tous</option>
          <option v-for="i in 10" :value="i * 5 + 5" class="option-style">
            {{ i * 5 + 5 }} amps et plus
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
select,
input {
  width: 100%;
  padding: 5px 10px;
  margin: 5px auto;
  border: 1px solid var(--light-grey);
  border-radius: 2px;
  background-color: var(--ivory);
  font-family: "Montserrat", cursive;
  font-size: 14px;
  color: var(--dark-grey);
  text-align-last: center;
  text-align: center;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
}
.filters {
  width: 60%;
  border-left: 2px var(--ivory) solid;
  padding-left: 50px;
  height: 100%;
}
.filters-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.filter {
  width: 30%;
}

/* CANT STYLE OPTIONS */
.option-style {
  font-family: "Montserrat", cursive;
  font-size: 14px;
  color: var(--dark-grey);
  text-align-last: center;
  text-align: center;
  border-radius: 15px;
  height: 1rem;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
}

@media (max-width: 1200px) {
 .small-title {
    font-size: 15px;
  }
}

@media (max-width: 1200px) {
 .small-title {
    font-size: 15px;
  }
}
</style>
