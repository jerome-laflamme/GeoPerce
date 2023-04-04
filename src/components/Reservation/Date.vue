<script setup lang="ts">
import { ref, watch } from "vue";
import { useReservation } from "../../shared/stores/reservationStore";
const reservationStore = useReservation();

watch(
  () => [reservationStore.arrivalDate, reservationStore.nightsIn],
  () => {
    reservationStore.fetchCamps();
  }
);
</script>

<template>
  <div class="date-container">
    <h2>Disponibilités</h2>
    <div class="inline">
      <div class="column">
        <h3 class="small-title">Date d'arrivé</h3>
        <input
          type="date"
          id="arrival"
          name="arrival"
          v-model="reservationStore.arrivalDate"
        />
      </div>
      <div class="column">
        <h3 class="small-title">Nombre de nuitées</h3>
        <input
          type="text"
          id="nightsIn"
          name="nightsIn"
          placeholder="Nuitées désirées"
          v-model="reservationStore.nightsIn"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

input[type=date] {
    background-position: right 10px top 50%;
    background-size: 24px 24px;
    padding-right: 36px;
}
input {
	width: 100%;
	padding: 5px 10px;
	border: 1px solid var(--light-grey);
	border-radius: 2px;
	background-color: var(--ivory);
	font-family: 'Montserrat', cursive;
	font-size: 14px;
	color: var(--dark-grey);
}

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

.date-container {
    width: 35%;
    height: 100%;
}

.inline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.column {
    width: 47%;
}

input:focus {
    outline: none;
}

@media (max-width: 1200px) {
 .small-title {
    font-size: 15px;
  }
}
</style>
