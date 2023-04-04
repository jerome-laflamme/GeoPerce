<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { useReservation } from "@/shared/stores";
import { LTooltip, LMarker, LIcon, } from "@vue-leaflet/vue-leaflet";
import type { CampInterface } from "@/shared/interfaces/Camp.Interface";
const props = defineProps<{
  camp: CampInterface;
}>();
</script>

<template>
  <l-marker :lat-lng="camp.position">
    <l-icon
      icon-url="https://img.icons8.com/ios/50/000000/camping-tent.png"
      icon-size="20"
    />
    <l-tooltip>
      <div class="camp-info">
        <h7>Terrain #{{ camp.id }}</h7>
        <p>Service offert : {{ camp.type.service }}</p>
        <p>
          Dimensions du terrain : {{ camp.type.length[0] }}' X
          {{ camp.type.length[1] }} '
        </p>
        <p class="price-tag">{{ camp.price }}$ par nuit</p>
      </div>
    </l-tooltip>
  </l-marker>
</template>

<style>
.leaflet-control-zoom {
  display: none;
}

.leaflet-tooltip {
  background-color: #ffdfdf;
  margin-left: 25px;
  padding: 1rem;
  border-radius: 10px;
}

h7 {
  color: #757300;
  font-size: 0.7rem;
  text-decoration: underline;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-bottom: 10px;
}

.price-tag {
  text-align: center;
  margin: 15px 0;
  font-size: 1.2rem;
}

.leaflet-tooltip-pane p {
  margin: 0 !important;
  padding: 2px 0;
  font-size: 0.7rem;
  font-weight: 700;
}
</style>
