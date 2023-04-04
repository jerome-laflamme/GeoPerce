<script setup lang="ts">
import { useUser } from "@/shared/stores";

async function signOut() {
	await useUser().signOut();
}
</script>

<template>
	<nav class="flex items-center justify-between flex-wrap p-6 background">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"></svg>
			<RouterLink to="/" class="font-semibold text-xl tracking-tight hover text-[#010081]">GÉOPERCÉ</RouterLink>
		</div>
		<div class="flex justify-end w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div>
				<RouterLink to="/" @click="signOut" class="adminNav text-sm px-4 py-2 leading-none border rounded text-[#010081] border-[#010081] hover:border-transparent hover hover:bg-white mt-4 lg:mt-0 cursor-pointer">SignOut</RouterLink>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.adminNav{
	border-top: 1px solid white;
	border-left: 1px solid white;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
	font-weight: 100;
}
.background {
	background-color: hsla(0, 0%, 76%, 0.95);
}
.hover:hover {
box-shadow: 1px 1px 1px black;
}
</style>
