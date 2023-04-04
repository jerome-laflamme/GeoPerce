<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import homepage from "./views/Homepage.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar v-if="!$route.meta.hideNavbar"/>
  <RouterView />
</template>

<style scoped></style>
