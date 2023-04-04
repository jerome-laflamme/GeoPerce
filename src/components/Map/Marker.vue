<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import { watch, ref } from "vue";
import { useMap } from "@/shared/stores";

const props = defineProps<{
  marker: any;
}>();
let url: string = `http://d24ovbg5mfvqtc.cloudfront.net/${props.marker.type}.svg`;
let classObject = ref(props.marker.type);
watch(
  () => props.marker,
  () => {
    url = `http://d24ovbg5mfvqtc.cloudfront.net/${props.marker.type}.svg`;
    classObject.value = props.marker.type;
  }
);
let iconSize = ref([25, 25]);
watch(
  () => useMap().selectedMarker,
  () => {
    if (useMap().selectedMarker === props.marker) {
      iconSize.value = [60, 60];
    } else {
      iconSize.value = [25, 25];
    }
  }
);

const toggleModal = () => {
  useMap().selectedMarker = props.marker;
};
</script>

<template>
  <l-marker @click="toggleModal()" :lat-lng="props.marker.point">
    <l-icon :class="classObject" :icon-url="url" :icon-size="iconSize" />
  </l-marker>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 100px;
  right: 100px;
  height: 400px;
  width: 400px;
}
.link {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-end;
}
.link p {
  font-style: italic;
  font-weight: 900;
}
.fa-solid {
  font-size: 25px;
}
h3 {
  font-size: 20px;
  font-style: italic;
  text-decoration: underline;
  color: var(--primary);
}
.image {
  height: 175px;
  width: 325px;
  padding: 15px 25px 15px 0;
}
.image img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}
.desc {
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  margin: 15px 0;
}
.link {
  display: flex;
  justify-content: flex-end;
}
</style>
