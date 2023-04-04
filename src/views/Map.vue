<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { onMounted, watch } from "vue";
import ModalInformation from "../components/Map/ModalInformation.vue";
import Marker from "../components/Map/Marker.vue";
import Filters from "../components/Map/Filters.vue";
import { useMap } from "../shared/stores/mapStore";
watch(
  () => useMap().filters,
  () => {
    useMap().fetchMarkers();
  }
);

watch(
  () => useMap().selectedMarker,
  () => {
    if (useMap().selectedMarker) {
      useMap().centerPoint = useMap().selectedMarker!.point;
    }
  }
);

onMounted(() => {
  useMap().fetchMarkers();
  useMap().selectedMarker = null;
});
</script>

<template>
  <Transition name="slide-right">
    <ModalInformation v-if="useMap().selectedMarker" />
  </Transition>
  <div class="map-div">
    <l-map ref="map" :zoom="10" :center="useMap().centerPoint">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="GeoPerceMap"
        :minZoom="14"
      ></l-tile-layer>
      <Marker v-for="marker in useMap().markers" :marker="marker" />
    </l-map>
  </div>

  <Filters />
</template>

<style>
.map-div {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  filter: saturate(0.2) hue-rotate(50deg);
}

.leaflet-popup-content-wrapper {
  background: #fff2decc !important;
}

.leaflet-popup-content p {
  margin: 0 !important;
}

.leaflet-popup-tip {
  display: none;
}

.leaflet-popup {
  position: absolute;
  text-align: center;
  margin-bottom: 30px !important;
}
</style>
