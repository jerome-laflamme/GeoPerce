<script setup lang="ts">
import TableSkeleton from "@/components/Admin/TableSkeleton.vue";
import NavBarAdmin from "@/components/Admin/NavBarAdmin.vue";
import { useCamp } from "@/shared/stores";
import { onBeforeMount } from "vue";
import router from "@/router";
import { CampInterface } from "@/shared/interfaces";
const campStore = useCamp();

onBeforeMount(() => {
	campStore.fetchCamps();
});

async function editTerrain(camp: CampInterface) {
	await campStore.updateCamp(camp);
	await campStore.fetchCamps();
}
async function deleteTerrain(terrainID: number) {
	await campStore.deleteCamp(terrainID);
	await campStore.fetchCamps();
}
</script>

<template>
	<NavBarAdmin />
	<img src="../assets/img/win98.jpg" class="win95" />
	<div class="tableContainer z-10">
		<TableSkeleton>
			<template v-slot:caption>
				<div class="flex justify-center gap-20">
					<h1 class="font-sans font-medium decoration-none text-6xl text-[#010081] no-underline">Administration des terrains</h1>
					<img src="../assets/img/computer-png.png" alt="" />
				</div>
				<br />
				<RouterLink to="/new" class="cursor hover text-base font-semibold title p-1.5">
					<div class="addField flex justify-between m-auto text-2xl items-center border-black p-2">
						<p class="text-black">Ajouter un terrain</p>
						<i class="fa-solid fa-plus text-6xl text-black"></i>
					</div>
				</RouterLink>
			</template>
			<template v-slot:th-thead>
				<th>Terrain ID</th>
				<th>Type de service</th>
				<th>AMP</th>
				<th>Longeur</th>

				<th>Prix</th>
				<th>Point GPS</th>
				<th>Edit</th>
				<th>Delete</th>
			</template>
			<template v-slot:td-tfoot>
				<th>Terrain ID</th>
				<th>Type de service</th>
				<th>AMP</th>
				<th>Longueur</th>

				<th>Prix</th>
				<th>Point GPS</th>
				<th>Edit</th>
				<th>Delete</th>
			</template>
			<template v-slot:tr-tbody>
				<tr v-for="(camp, index, key) in campStore.camps" :key="index" class="odd:bg-[#d4d4d4]">
					<td class="w-1/12"><input v-model="camp.id" class="w-4/5 text-center" /></td>
					<td class="w-2/12"><input v-model="camp.type.service" class="w-4/5" /></td>
					<!--< This line cause error in the browser console-->
					<td class="w-1/12"><input v-model="camp.type.amp" class="w-4/5 text-center" /></td>
					<td class="w-1/12">L:<input v-model="camp.type.length[0]" class="w-4/5 text-center" /> H:<input v-model="camp.type.length[1]" class="w-4/5 text-center" /></td>
					<td class="w-1/12"><input v-model="camp.price" class="w-4/5 text-center" />$</td>
					<td class="w-2/12"><input v-model="camp.position[0]" class="w-4/5 text-center" /><input v-model="camp.position[1]" class="w-4/5 text-center" /></td>
					<td class="w-1/12">
						<img @click="editTerrain(camp.id)" class="writeYellow cursor-pointer text-center m-auto" src="../assets/img/write_yellow-1.png" alt="" />
					</td>
					<td class="w-1/12"><!-- 						<p @click="deleteTerrain(camp.id)" class="w-4/5 cursor-pointer text-center"></p> --><img @click="deleteTerrain(camp.id)" class="cursor-pointer m-auto" src="../assets/img/trashicon.png" alt="" /></td>
				</tr>
			</template>
		</TableSkeleton>
	</div>
</template>

<style scoped>
.addField {
	border-top: 1px solid white;
	border-left: 1px solid white;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
	font-weight: 100;
	width: 12vw !important;
}

.addField:hover {
	box-shadow: 1px 1px 1px black;
}

input {
	background-color: hsla(0, 0%, 76%, 0);
}

.sunInput {
}

.win95 {
	position: absolute;
	top: 0;
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;
	z-index: -1 !important;
	background-attachment: fixed;
	position: fixed;
}

.win95Icon {
	height: 60px;
}

.tableContainer {
	z-index: 99 !important;
	background-attachment: scroll;
}

i {
	font-size: 18px;
}

.fa-plus {
	font-size: 22px;
}
</style>
