<script setup lang="ts">
import { watch, ref } from "vue";
import dateForm from "../components/Reservation/Date.vue";
import filterForm from "../components/Reservation/Filters.vue";
import CampMap from "../components/Reservation/SmallMap/CampMap.vue";
import bookingInformation from "../components/Reservation/BookingInformation.vue";

//Store imports
import { useReservation } from "../shared/stores/reservationStore";
const reservationStore = useReservation();

// SCRIPT
reservationStore.activeForm = false;
</script>

<template>
  <div class="reservation">
    <h2 class="title">
      <p>RESERVATION</p>
    </h2>

    <div class="content-container">
      <div class="top-area">
        <dateForm />
        <filterForm />
      </div>

      <div class="map-area">
        <!-- BOOKING INFORMATION -->
        <bookingInformation />
        <!-- MAP -->
        <div class="map">
          <CampMap />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reservation {
  z-index: -1;
  display: flex;
  width: 90%;
  margin: 150px auto 0;
  height: 85vh;
}
.title {
  border-left: 10px solid var(--cool-blue);
  margin-right: 1.5%;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
.title p {
  font-size: 12vh;
  text-align: center;
  color: var(--cool-blue);
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4rem;
  background-color: var(--primary);
  border-radius: 15px;
}

.top-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 15%;
  margin-bottom: 2rem;
}

.map-area {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 85%;
  border: solid 4px var(--primary);
  border-radius: 15px;
}

input {
  width: 100%;
  padding: 5px 10px;
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  background-color: var(--ivory);
  font-family: "Montserrat", cursive;
  font-size: 14px;
  color: var(--dark-grey);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
}

@media (max-width: 996px) {
  .top-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 10%;
  margin-bottom: 2rem;
}
  .map-area {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 90%;
  border: solid 4px var(--primary);
  border-radius: 15px;
}
}

@media (max-width: 1200px) {
  .content-container {
    padding: 1rem;
  }
}
@media (max-width: 1600px) {
  .title {
    display: none;
  }
}
</style>
