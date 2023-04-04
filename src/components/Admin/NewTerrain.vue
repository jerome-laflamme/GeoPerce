<script setup lang="ts">
import NavBarAdmin from "@/components/Admin/NavBarAdmin.vue";
import RowSkeleton from "@/components/Admin/RowSkeleton.vue";
</script>

<template>
	<NavBarAdmin />
	<div class="backgroundColor"></div>
	<div class="background"></div>
	<div class="container m-24 mx-auto rounded pb-20">
		<div class="titlePage">
			<div class="titleContainer">
				<div class="title">CRÉER UN NOUVEAU TERRAIN</div>
			</div>
			<div class="iconContainer">
				<div class="icon">X</div>
				<div class="icon">?</div>
			</div>
		</div>
		<RowSkeleton />
	</div>
</template>

<style scoped>
.titlePage {
	height: 30px;
	width: 100%;
	background-color: #010081;
	display: flex;
	justify-content: space-between;
  align-items: center;
}

.title {
	color: white;
  margin-left: 10px;
}

.iconContainer {
	display: flex;
	gap: 10px;
	align-items: center;
	margin-right: 10px;
}
.icon {
	color: black;
	border: 1px solid black;
	background-color: #c2c2c2f2;
	padding-left: 4px;
	padding-right: 4px;
	height: 23px;
	border-top: 1px solid white;
	border-left: 1px solid white;
	border-bottom: 1px solid black;
	border-right: 1px solid black;
	font-size: 14px;
	cursor: pointer;
}

.icon:nth-of-type(2) {
	background-color: #c2c2c2f2;
	padding-left: 5px;
	padding-right: 5px;
}

.icon:active {
	border-top: 1px solid black;
	border-left: 1px solid black;
	border-bottom: 1px solid white;
	border-right: 1px solid white;
	translate: 2px;
}
.backgroundColor {
	background-color: #008080;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: -1;
}
.container {
	background-color: #c2c2c2f2;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	border-radius: 0px;
	border: 2px solid white;
}
</style>
