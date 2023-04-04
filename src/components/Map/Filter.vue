<script setup lang="ts">
import { useMap } from "../../shared/stores/mapStore";
defineProps<{
  category: string;
}>();
</script>

<template>
  <div class="filter">
    <p v-if="category == 'poi'">Points d'intérêts</p>
    <p v-else-if="category == 'hiking'">Randonnées</p>
    <p v-else>{{ category[0].toUpperCase() + category.substring(1) }}</p>
    <label class="switch">
      <input type="checkbox" :value="category" v-model="useMap().filters" />
      <span class="slider"></span>
    </label>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--cool-blue);
  margin: 25px 0;
  padding: 10px 20px;
  border-radius: 5px;
}

p {
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--dark-grey);
}
/* INPUTS */
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--light-grey);
  border-radius: 10px;
  border: 1px solid #2e3e2c;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 25px;
  width: 25px;
  left: 4px;
  bottom: 4px;
  background-color: #2e3e2c;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 5px;
}

input:checked + .slider {
  background-color: var(--light-grey);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--light-grey);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

@media screen and (max-width: 992px) {
  .filter {
    height: 100px;
  }
  p {
    font-size: 25px;
  }
  .switch {
    height: 65px;
    width: 130px;
  }
  .slider::before {
    bottom: 12px;
    left: 15px;

    height: 35px;
    width: 40px;

    border-radius: 50%;
  }
  input:checked + .slider::before {
    transform: translateX(60px);
  }
}
</style>
