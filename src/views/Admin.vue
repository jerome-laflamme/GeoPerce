<script setup lang="ts">
import NavBarAdmin from "@/components/Admin/NavBarAdmin.vue";
import SignIn from "@/components/Admin/SignIn.vue";
import { useUser } from "@/shared/stores";
import AdminPageCRUD from "@/views/AdminPageCRUD.vue";
</script>

<template>
  <NavBarAdmin />
  <SignIn />
</template>

<style scoped>

</style>