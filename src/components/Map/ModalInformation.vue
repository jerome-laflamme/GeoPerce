<script setup lang="ts">
import { useMap } from "@/shared/stores";
import { RouterLink } from "vue-router";

const mapStore = useMap();
const toggleOffInfo = () => {
  if (useMap().selectedMarker) {
    mapStore.selectedMarker = null;
    mapStore.centerPoint = [48.52, -64.21];
  }
};
function nextMarkers() {
  useMap().nextMarker(mapStore.selectedMarker?.type);
}
</script>

<template>
  <div @click="toggleOffInfo()" class="modal-background"></div>
  <div class="modal-container">
    <div class="image">
      <img
        :src="mapStore.selectedMarker!.image"
        :alt="mapStore.selectedMarker!.title"
      />
    </div>
    <div class="mid-modal">
      <div class="title">
        <h3>{{ mapStore.selectedMarker!.title }}</h3>
      </div>
      <div class="link" v-if="mapStore.selectedMarker!.type == 'camping'">
        <RouterLink to="/reservation"><p>Réserver</p> </RouterLink>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="link" v-else-if="mapStore.selectedMarker!.link">
        <a :href="mapStore.selectedMarker!.link" target="_blank"
          >Lien vers page web</a
        >
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>

    <div class="desc">
      <p>{{ mapStore.selectedMarker!.desc }}</p>
    </div>
    <div class="link">
      <p class="cursor-pointer" @click="nextMarkers()">Suivant</p>
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>
</template>

<style scoped>
.modal-background {
  position: absolute;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  top: 0;
}
.modal-container {
  position: absolute;
  top: 120px;
  right: 200px;
  background-color: var(--ivory);
  z-index: 100;
  width: 400px;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 15px;
  align-items: center;
  flex-direction: column;
  opacity: 0.9;
  border: 3px solid var(--primary);
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px 0;
}

.image {
  height: 250px;
  width: 100%;
}

.mid-modal {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.title {
  width: 95%;
  text-align: left;
  margin: 10px auto -10px;
}

h3 {
  font-family: "Galada", cursive;
  font-size: 2rem;
  color: var(--primary);
  text-decoration: underline;
}

.desc {
  width: 100%;
  text-align: left;
  margin: 10px 0;
  background-color: var(--primary);
  border-radius: 10px;
  padding: 25px;
}

.desc p {
  font-family: "Montserrat", sans-serif;
  color: var(--light-grey);
}

.link {
  display: flex;
  align-items: baseline;
  width: 90%;
  margin: 10px auto;
  z-index: 100;
  position: relative;
}

.link a,
.link p {
  margin-right: 5px;
  font-family: "Monteserrat", sans-serif;
  font-weight: 600;
  color: var(--dark-grey);
  font-size: 1.2rem;
  transition: 0.3s;
}

.link:hover a,
.link:hover p {
  color: var(--cool-blue);
}

@media screen and (max-width: 992px) {
  .modal-container {
    top: 100px;
    right: 545px;
  }
}
</style>
