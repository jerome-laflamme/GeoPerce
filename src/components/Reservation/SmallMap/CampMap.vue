<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { useReservation } from "../../../shared/stores/reservationStore";
import Pins from "./Pins.vue";
import { onMounted } from "vue";
import type { CampInterface } from "@/shared/interfaces";

onMounted(() => {
  useReservation().fetchCamps();
});

const initiateBooking = (camp: CampInterface) => {
  useReservation().activeForm = true;
  useReservation().selectedCamp = camp;
  useReservation().mapCenter = camp.position;
  useReservation().mapCenter[1] += 0.002;
};
</script>

<template>
  <div class="map-div">
    <!-- <div class="map-div" @click="useReservation().closeModal()"> -->
    <l-map ref="map" :zoom="17" :center="useReservation().mapCenter">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="GeoPerceMap"
        :minZoom="17"
        :maxZoom="17"
        class="map-container"
      ></l-tile-layer>
      <Pins
        v-for="camp in useReservation().camps"
        :camp="camp"
        class="pins"
        @click="initiateBooking(camp)"
      />
    </l-map>
  </div>
</template>

<style>
.map-div {
  z-index: 0;
  filter: saturate(0.2) hue-rotate(50deg);
  border-radius: 15px;
}

.pins {
  z-index: 10;
}

.map-container {
  height: 100%;
}

@media (max-width: 500px) {
}

@media (max-width: 996px) {
}

@media (max-width: 1200px) {
}

@media (max-width: 1600px) {
 
}
</style>
