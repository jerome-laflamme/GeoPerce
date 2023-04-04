<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Map from "../views/Map.vue";

const scrollToMap = () => {
	const map = document.getElementById("map");
	map?.scrollIntoView({ behavior: "smooth" });
};

</script>

<template>
	<div class="container">
		<div class="bg"></div>
		<div class="logoWrapper">
			<div class="circle"></div>
			<div class="logo"></div>
		</div>
		<div class="arrow" @click="scrollToMap">
			<i class="fa-solid fa-chevron-down"></i>
		</div>
	</div>
	<div class="map" id="map">
		<Map />
	</div>
</template>

<style scoped>
@keyframes bounce {
	0%,
	100%,
	20%,
	50%,
	80% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-15px);
	}
	60% {
		transform: translateY(-15px);
	}
}

.arrow {
	position: absolute;
	top: 85%;
	left: 50%;
	transform: translate(-50%, -50%);
	animation-name: bounce;
	animation-duration: 1.8s;
	animation-iteration-count: infinite;
	animation-delay: 1s;
	cursor: pointer;
}

.arrow i {
	color: hsla(0, 0%, 91%, 0.85);
	font-size: 80px;
	opacity: 0.9;
	transform: translate(-50%, 15%);
}
.logoWrapper {
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);
	top: 50%;
}

.circle {
	position: absolute;
	background-color: hsla(0, 0%, 91%, 0.85);
	height: 225px;
	width: 225px;
	z-index: -1;
	border-radius: 50%;
	transform: translate(-50%, -50%);
}

.logo {
	background-image: url(../assets/img/geoperce-logo.png);
	background-size: cover;
	height: 225px;
	width: 225px;
	z-index: 20;
	position: absolute;
	transform: translate(-54%, -50%);
}

.bg {
	background: url(../assets/img/homepage-background.jpg) ;
	background-size: cover;
	background-position: 30% 40%;
	height: calc(100vh);
	z-index: 0;
	width: 100vw;
	filter: saturate(0.6);
}

.map {
	margin-top: 0;
	position: absolute;
	width: 100vw;
	height: 100vh;
}

/*RESPONSIVE*/

@media screen and (max-width: 992px) {
}
</style>
