<script setup lang="ts">
import { reactive, ref } from "vue";
import type {PartialCampInterface, CampInterface2} from "@/shared/interfaces";
import { useCamp } from "@/shared/stores";
import router from "@/router";

const campStore = useCamp();
const error = ref(false);
const state = reactive<CampInterface2>({
  id: "",
  type: {
    service: "",
    amp: 0,
    length: [0,0],
    sun: "",
  },
  price: 0,
  position: [0,0],
})

async function onSubmit() {
  if(state.id !== "" && state.type!.service !== "" && state.type!.length[0] !== 0 && state.type!.length[1] !== 0 && state.type!.sun !== "" && state.price !== 0 && state.position![0] !== 0 && state.position![1] !== 0) {
    try{
      await campStore.createCamp({...state});
      await campStore.fetchCamps();
      await router.push("/crud");
    }catch (e) {
      console.log(e)
    }
  }else{
    error.value = true;
  }
}
</script>

<template>
	<div class="flex flex-flow justify-around mt-10">
		<div class="flex flex-col py-10 pl-9 gap-14">
			<div class="flex gap-20">
				<div class="container flex flex-col">
					<label for="" class="pb-8 text-lg font-semibold underline text-[#010081]">Informations sur le terrain</label>
					<label for="" class="font-semibold">Terrain ID:</label>
					<input v-model="state.id" type="text" class="border border-[var(--dark-grey)] h-8" />
					<label for="" class="pt-5 font-semibold">Prix:</label>
					<input v-model="state.price" type="number" class="border border-[var(--dark-grey)] h-8" />
				</div>
				<div class="flex flex-col">
					<label for="" class="pb-8 text-lg font-semibold underline text-[#010081]">Description</label>
					<label for="" class="font-semibold">Type service:</label>
					<input v-model="state.type.service" type="text" class="border border-[var(--dark-grey)] h-8" />
					<label for="" class="pt-5 font-semibold">Type amp:</label>
					<input v-model="state.type.amp" type="number" class="border border-[var(--dark-grey)] h-8" />
				</div>
			</div>

			<div class="flex row gap-20">
				<div class="flex flex-col">
					<label for="" class="pb-8 text-lg font-semibold underline text-[#010081]">Coordonnées GPS</label>

					<label for="" class="font-semibold">Latitude:</label>
					<input v-model="state.position[0]" type="number" class="border border-[var(--dark-grey)] h-8" />
					<label for="" class="pt-5 font-semibold">Longitude:</label>
					<input v-model="state.position[1]" type="number" class="border border-[var(--dark-grey)] h-8" />
				</div>

				<div class="flex flex-col">
					<label for="" class="pb-8 text-lg font-semibold underline text-[#010081]">Dimensions</label>

					<label for="" class="font-semibold">Type de dimension L:</label>
					<input v-model="state.type.length[0]" type="number" class="border border-[var(--dark-grey)] h-8" />
					<label for="" class="pt-5 font-semibold">Type de dimension H:</label>
					<input v-model="state.type.length[1]" type="number" class="border border-[var(--dark-grey)] h-8" />
				</div>
			</div>
			<div class="navContainer">
				<button @click="onSubmit" class="text-sm px-4 py-2 leading-none border rounded text-black border-black cursor-pointer">Sauvegarder</button>
				<RouterLink to="/crud" class="cursor-pointer"> <button class="return text-sm py-2 leading-none cursor-pointer">Retour</button></RouterLink>

				<p v-if="error">Veuillez compléter tous les champs</p>
			</div>
		</div>
		<div class="imgContainer flex items-center">
			<img src="../../assets/img/campsite-8bit.png" alt="" class="campsiteImg" />
		</div>
	</div>
</template>

<style scoped>
.campsiteImg {
	height: 70vh;
	box-shadow: 5px 5px 10px #008080;
  filter: grayscale(0.75);
}

button {
	background-color: #010081;
	color: white;
	border-radius: 0;
	border-top: 1px solid white;
	border-left: 1px solid white;
	border-bottom: 1px solid black;
	border-right: 1px solid black;
	width: 150px;
	display: flex;
	align-self: center;
	justify-content: center;
}

button:hover {
	box-shadow: 4px 4px 5px black;
}


.navContainer {
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	align-self: center;
	gap: 50px;
}
</style>
