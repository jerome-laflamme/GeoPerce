<script setup lang="ts">
import Navbar from "../components/Navbar.vue";

//regarder pourquoi le nav bar entre en collision avec mon d/but de page
</script>

<template>
	<Navbar />

	<div class="main__container">
		<div class="about__title"><h1>A propos</h1></div>

		<div class="infos__wrapper">
			<p>
				Le projet de Géoparc de Percé avait la capacité de devenir un acteur clé dans la sensibilisation des populations et des visiteurs à la fragilité de notre patrimoine naturel tout en mettant en avant les opportunités qu'il offre. Il avait le
				potentiel de devenir un ambassadeur de renom pour un réseau mondial de territoires exceptionnels, en mettant en avant leur unicité, leur prise en charge locale et leur développement durable. C'est en 2018 qu'il a obtenu le statut de Géoparc
				mondial UNESCO, en reconnaissance de son engagement en faveur de la préservation de l'environnement et de sa contribution à un développement durable.
			</p>
			<div class="infos__picture"></div>
		</div>
		<div class="about__values">
			<div class="about__title"><h1>Nos valeurs</h1></div>
			<div class="card__container">
				<div class="card">
					<div class="card__icon"><i class="fa-regular fa-hand-peace"></i></div>
					<div class="card__info">
						<h2 class="card__title">Respect</h2>
						<p>
							Le respect environnemental consiste à reconnaître la valeur de l'environnement et à agir de manière à minimiser les impacts négatifs sur celui-ci. Cela implique de prendre des mesures pour préserver les ressources naturelles, protéger
							la biodiversité, réduire les émissions de gaz à effet de serre, et adopter des pratiques durables et respectueuses de l'environnement.
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card__icon"><i class="fa-solid fa-earth-americas"></i></div>
					<div class="card__info">
						<h2 class="card__title">Solidarité</h2>
						<p>
							La solidarité environnementale consiste à reconnaître que les choix et les actions de chacun ont un impact sur l'environnement et à prendre des mesures collectives pour protéger et préserver celui-ci. Cela implique de travailler
							ensemble pour protéger la biodiversité pour les générations futures.
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card__icon"><i class="fa-regular fa-handshake"></i></div>
					<div class="card__info">
						<h2 class="card__title">Coresponsabilité</h2>
						<p>La corresponsabilité environnementale implique également de travailler ensemble pour promouvoir des pratiques durables et pour encourager les autres à adopter des comportements respectueux de l'environnement.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="mission__container">
			<div class="about__title"><h1>Notre mission</h1></div>
			<div class="mission__border">
				<p class="mission__text">
					La préservation de l'environnement pour les générations futures est au cœur de la mission des Géoparcs. Ces sites visent à protéger et à conserver l'intégrité des héritages géologiques pour le bénéfice des générations actuelles et futures.
					En mettant en valeur et en préservant ces sites, les Géoparcs deviennent des outils de développement durable pour les communautés locales. Ces sites prennent en compte l'histoire, la culture, les conditions climatiques et la situation
					géographique du territoire pour offrir une information adaptée et pertinente. Le projet de Géoparc de Percé est un exemple concret de cet engagement constant en faveur de la conservation du patrimoine naturel, géologique et humain de la
					région. Il témoigne également de la volonté des communautés locales de participer à la gestion et au développement de leur patrimoine. Dans cette optique, la valorisation du territoire, la création d'emplois et les bonnes pratiques de
					développement durable sont des priorités centrales de la mission des Géoparcs.
				</p>
			</div>
		</div>
		<div class="gallery__container">
			<div class="about__title gallery__title"><h1>GALERIE</h1></div>

			<div class="gallery__grid">
				<div class="gallery__img">
					<img src="../assets/img/galerie/gal1.jpg" alt="" />
					<img src="../assets/img/galerie/gal2.jpg" alt="" />
					<img src="../assets/img/galerie/gal3.jpg" alt="" />
					<img src="../assets/img/galerie/gal4.jpg" alt="" />
					<img src="../assets/img/galerie/gal5.jpg" alt="" />
					<img src="../assets/img/galerie/gal6.jpg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* .infos__wrapper p {
	border: 1px solid var(--ivory);
	border-radius: 10px;
	background-color: #495d47;
} */
.about__title {
	margin-top: 5rem;
}

.main__container {
	background-color: var(--primary);
	margin-top: 6rem;
	height: auto;
}

section {
	height: 100vh;
	width: 90vw;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-self: center;
	justify-content: center;
}

.about__title:nth-of-type(1) {
	padding-top: 4rem;
}

.about__title h1 {
	text-transform: uppercase;
	text-decoration: none !important;
	margin-left: 6rem;
}

.infos__wrapper {
	display: flex;
	justify-content: space-around;
	margin: 2rem 0rem;
	align-items: center;
}

.infos__wrapper p {
	color: var(--ivory);
	width: 35%;
}

.infos__picture {
	background: url("../assets/img/perce-abt3.jpg");
	background-size: cover;
	width: 35vw;
	height: 50vh;
	background-position: 50% 50%;
	border-radius: 25px;
}

.infos__wrapper:nth-last-of-type(2) {
	flex-direction: row-reverse;
}

.about__values {
	margin: 5rem 5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid var(--ivory);
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.464);
	width: 30vw;
	margin: 5rem 2rem;
	border-radius: 10px;
	background-color: #495d47;
}

.card p {
	margin-bottom: 2rem;
}

.card__icon {
	margin-top: 2rem;
}

.card__icon i {
	font-size: 3rem;
	color: var(--ivory);
}

.card__title {
	margin-bottom: 2rem;
	text-align: center;
}

.card__container {
	display: flex;
	justify-content: space-between;
}

.card,
.card__icon,
.card__info p {
	color: var(--ivory);
}

.card__info {
	margin: 15px 15px;
}

.mission__text {
	color: var(--ivory);
	width: 50%;
	margin: 0 auto;
	margin-top: 2rem;
	margin-bottom: 2rem;
}

.mission__border {
	border: 1px solid var(--ivory);
	width: 90vw;
	margin: 0 auto;
	background-color: #495d47;
	border-radius: 10px;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.423);
	margin-left: 5rem;
	margin-right: 5rem;
}

.gallery__grid {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	width: 90vw;
	margin: auto;
}

.gallery__grid > div {
	margin: 5px;
	flex-basis: 280px;
	flex-grow: 1;
	flex-shrink: 1;
	overflow: hidden;
}

.gallery__grid > div img {
	object-fit: cover;
	object-position: center center;
	width: 30%;
}

.gallery__img {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 15px;
}

.gallery__title {
	margin-top: 5rem;
}
</style>
