<script setup lang="ts">
import Accordion from "@/components/Accordion.vue";

const QA = [
  {
    question: "Comment puis-je réserver un emplacement de camping ?",
    answer:
      "Vous devez aller dans sur la page carte interactive et sélectionner vos critères. Ensuite vous pourrez procédez à la sélection du terrain de vôtre choix.",
  },
  {
    question: "Quels sont les moyens de paiement accepté ?",
    answer:
      "Par soucis de sécurité nous ne prenons que les paiements fait par notre partenaire PayPal.",
  },
  {
    question: "Puis-je amener mon chien?",
    answer: "Oui. Votre chien pourrait être admis sous certaines conditions.",
  },
  {
    question:
      "Est-ce qu’on peut être plus de 6 personnes sur l'emplacement de camping? ",
    answer:
      "Non. Cependant, il pourrait avoir des exceptions pour les familles ayant plusieurs enfants. Contactez-nous. Les emplacements de camping de groupe peuvent aussi accueillir plus que 6 personnes.",
  },
  {
    question:
      "Est-il possible de séjourner une seule nuit le vendredi ou le samedi?",
    answer:
      "Oui. Les réservations pour une nuit sont acceptées 72 heures précédant l'entrée sur le site, et ce, à compter de 9 h. Si vous désirez réserver plus longtemps d'avance, le minimum de 2 nuits doit être respecté. Pour le prêt-à-camper, un séjour doit être composé d'un minimum de 2 nuits consécutives en tout temps.",
  },
];
</script>

<template>
  <section class="flex relative">
    <img
      class="faq-img w-3/5 absolute rounded-lg"
      src="../assets/img/faq.jpg"
      alt="Rocher Percé"
    />

    <div
      class="faq absolute flex flex-col rounded-lg overflow-x-hidden overflow-y-auto"
    >
    <h1>Foire aux questions</h1>
      <div class="m-auto">
        <div v-for="i in QA" class="content flex column justify-between item-center rounded-lg">
          <Accordion :i="i">
            {{ i.answer }}
          </Accordion>
        </div>
      </div>
      <p class="contact-text">N'hesitez pas à nous <RouterLink class="link" to="/contact">contacter</RouterLink> si vous avez d'autres questions!</p>
    </div>
  </section>
</template>

<style scoped>

.faq-img {
  left: 30%;
  top: 12rem;
  filter: saturate(0.4);
}

.faq {
  top: 9rem;
  left: 10%;
  padding: 3rem;
  background-color: #2e3e2cfb;
}
.content {
  padding: 10px;
  background-color: var(--ivory);
  margin: 30px 0;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
}

h1 {
  font-size: 3rem;
  padding: 0;
  margin-bottom: -20px;
}

.contact-text {
  margin-top: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 0;
  color: var(--dark-grey);
  background-color: var(--cool-blue);
  padding: 20px;
  text-align: center;
  border-radius: 15px;
}

.link {
  font-size: 1.3rem;
  color: var(--primary);
  transition: all 0.3s ease;
}

.link:hover {
  color: var(--ivory);
}
@media only screen and (max-width: 850px) {

  h1 {
    text-align: center;
    width: 100%;
    font-size: 2rem;
  }
  .faq-img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100vw;
    height: 110vh;
    filter: saturate(0.4);
  }
  .faq {
    position: relative;
    top: 15vh;
    left: 5vw;
    width: 90vw;
    height: 90vh;
    padding: 5px;
    padding-bottom: 30px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    width: 90%;
  }

  .contact-text {
    width: 90%;
    margin: 20px auto;
  }
  
}
</style>
