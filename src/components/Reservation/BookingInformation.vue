<script setup lang="ts">
import { ref, watch } from "vue";
//Store import
import { useReservation } from "../../shared/stores/reservationStore";
const reservationStore = useReservation();

// Functonnalities
const backToMap = () => {
  reservationStore.activeForm = false;
  reservationStore.toggleFeedbackMsg = false;
  reservationStore.mapCenter = [48.52272, -64.21673];
};
</script>

<template>
  <Transition name="slide-left">
    <div v-if="reservationStore.activeForm" class="over-left-side-map" @click="backToMap()">
      <div class="camp-informations">
        <h5>Terrain {{ reservationStore.selectedCamp.id }}</h5>
        <p>
          Services offerts :
          {{ reservationStore.selectedCamp.type.service }}
        </p>
        <p>
          Ampérage sur le terrain :
          {{ reservationStore.selectedCamp.type.amp }}
        </p>
        <p>
          Longeur du terrain :
          {{ reservationStore.selectedCamp.type.length[0] }} x
          {{ reservationStore.selectedCamp.type.length[1] }}
        </p>
        <!-- <p>Disponibilitées :  {{  }}</p> -->
        <h6>{{ reservationStore.selectedCamp.price }}$/nuit</h6>
      </div>
      <Transition name="slide-left">
        <div
          v-if="
            reservationStore.toggleFeedbackMsg &&
            reservationStore.feedbackMsg == `Votre réservation a été confirmée! Vous recevrez un courriel de confirmation.`
          "
          class="confirmation-container"
        >
          <p>{{ reservationStore.feedbackMsg }}</p>
        </div>
        <div
          v-else-if="reservationStore.toggleFeedbackMsg"
          class="error-container"
        >
          <p>Erreur : {{ reservationStore.feedbackMsg }}</p>
        </div>
      </Transition>
    </div>

    <div v-else class="modal-info">
      <p>
        Cliquez sur un terrain pour consulter ses informations et le réserver.
      </p>
    </div>
  </Transition>

  <div class="over-right-side-map">
    <Transition name="slide-right">
      <div v-if="reservationStore.activeForm" class="modal-form">
        <div class="form-container-top">
          <div class="icon-container">
            <i
              class="fa-solid fa-xmark close"
              @click="reservationStore.activeForm = false"
            ></i>
          </div>

          <h2 class="info-title">Informations personnelles</h2>

          <h6 class="info-subtitle">
            Entrez vos informations pour réserver le terrain #{{
              reservationStore.selectedCamp.id
            }}
          </h6>
          <div class="information-inline">
            <div class="information-column">
              <h3 class="small-title">Nom Complet</h3>
              <input
                v-model="reservationStore.bookingInfo.name"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Nom"
              />
            </div>
            <div class="information-column">
              <h3 class="small-title">Adresse Courriel</h3>
              <input
                v-model="reservationStore.bookingInfo.email"
                type="text"
                id="email"
                name="email"
                placeholder="Addresse courriel"
              />
            </div>
          </div>
          <div class="information-inline">
            <div class="information-column">
              <h3 class="small-title">Téléphone</h3>
              <input
                v-model="reservationStore.bookingInfo.phone"
                type="text"
                id="phone"
                name="phone"
                placeholder="Téléphone"
              />
            </div>
            <div class="information-column">
              <h3 class="small-title">Type d'équipement</h3>
              <select
                v-model="reservationStore.bookingInfo.equipment"
                id="equipment"
                name="equipment"
                class="select-style"
              >
                <option value="" disabled selected>Votre équipement</option>
                <option value="Tente">Tente</option>
                <option value="Roulotte">Roulotte</option>
                <option value="Mobilhome">Mobile-home</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>
        </div>
        <div class="payment-section">
          <h4 class="payment-title">Paiement</h4>
          <div class="information-inline">
            <div class="information-column">
              <h3 class="small-title paiment-label">Nom sur la carte</h3>
              <input
                v-model="reservationStore.bookingInfo.card.name"
                class="payment-input"
                type="text"
                id="names"
                name="name"
                placeholder="Nom sur la carte"
              />
            </div>
            <div class="information-column">
              <h3 class="small-title paiment-label">Numéro de carte</h3>
              <input
                v-model="reservationStore.bookingInfo.card.cardNumber"
                class="payment-input"
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="Numéro de carte"
              />
            </div>
          </div>
          <div class="information-inline-always">
            <div class="information-inline-always payment-50">
              <div class="information-column expiration-column">
                <h3 class="small-title paiment-label">Expiration</h3>
                <input
                  v-model="reservationStore.bookingInfo.card.expiration"
                  class="payment-input"
                  type="text"
                  id="expiration"
                  name="Expiration"
                  placeholder="MM/AA"
                />
              </div>
              <div class="information-column">
                <h3 class="small-title paiment-label">CVV</h3>
                <input
                  v-model="reservationStore.bookingInfo.card.cvv"
                  class="payment-input cvv-input"
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="CVV"
                />
              </div>
            </div>
            <div class="confirmation-btn-section payment-50">
              <button
                class="btn btn-primary"
                @click="reservationStore.confirmReservation()"
              >
                Confirmer <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
select,
input {
  width: 100%;
  padding: 5px 10px;
  margin: 5px auto;
  border: 1px solid var(--light-grey);
  border-radius: 2px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--ivory);
  font-family: "Montserrat", cursive;
  font-size: 14px;
  color: var(--dark-grey);
  text-align-last: center;
  text-align: center;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
}

.select-style {
  color: #888;
}

.confirmation-container {
  position: absolute;
  left: 50px;
  bottom: 50px;
  width: 300px;
  border-radius: 15px;
  background-color: var(--green);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.confirmation-container p {
  color: var(--light-grey);
  font-family: "Galada", cursive;
  font-size: 1.1rem;
  letter-spacing: 0.1px;
  text-align: center;
}
.error-container {
  position: absolute;
  left: 50px;
  bottom: 50px;
  width: 300px;
  border-radius: 15px;
  background-color: var(--red);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.error-container p {
  color: var(--light-grey);
  font-family: "Galada", cursive;
  font-size: 1.1rem;
  letter-spacing: 0.1px;
  text-align: center;
}

.camp-informations {
  position: absolute;
  background-color: #ffe9c7ce;
  padding: 2rem;
  top: 50px;
  left: 50px;
  border-radius: 10px;
}

.camp-informations h5 {
  color: var(--primary);
  font-size: 1rem;
  text-decoration: underline;
  font-family: "Galada", cursive;
  margin-bottom: 10px;
}

.camp-informations p {
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1px;
  line-height: 20px;
}

.camp-informations h6 {
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1px;
  text-align: center;
  margin-top: 15px;
  background-color: var(--cool-blue);
  padding: 10px;
  border-radius: 10px;
}

.over-left-side-map {
  width: 55%;
  z-index: 10;
}

.over-right-side-map {
  width: 45%;
  display: flex;
  flex-direction: column;
}
.modal-info {
  position: absolute;
  bottom: 50px;
  left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10%;
  padding: 3rem;
  background-color: #ffe9c7af;
  border-radius: 10px;
  z-index: 2;
  width: 380px;
}

.modal-info p {
  color: var(--primary);
  font-size: 1rem;
  font-weight: 700;
}

.modal-form {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 101%;
  padding: 3rem;
  background-color: var(--cool-blue);
  border-radius: 15px;
  z-index: 2;
  border: 4px solid var(--primary);
  transform: translateY(-0.5%);
  width: 45%;
}

.form-container-top {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 60%;
  transition: all 0.3s ease-out;
}

.icon-container {
  position: absolute;
  top: -15px;
  right: 10px;
  padding: 1rem;
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
  font-weight: 700;
}

.icon-container:hover .close {
  transform: rotateZ(90deg);
  transition: all 0.3s ease-out;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  padding: 1rem;
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
  font-weight: 700;
}

.close:hover {
  color: #666;
  transition: all 0.3s ease-out;
}

.info-title {
  color: var(--primary);
  font-size: 1.3rem;
  text-shadow: none;
}

.modal-form h2 {
  margin: 0;
}

.info-subtitle {
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 700;
  height: 20%;
}

.information-inline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30%;
  margin-bottom: 10px;
}

.information-inline-always {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  height: 100%;
}

.information-column {
  display: flex;
  flex-direction: column;
  margin-right: 5%;
  width: 100%;
}

.small-title {
  color: var(--dark-grey);
  font-size: 1rem;
}

.payment-section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: var(--ivory);
  padding: 2rem;
  height: 50%;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin-top: 5%;
}

.payment-title {
  color: var(--primary);
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: -3%;
}

.payment-50 {
  width: 50%;
}

.payment-input {
  background-color: var(--light-grey);
  border-radius: 3px;
  border: none;
  padding: 0.5rem;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  height: 40px;
  margin-right: 50px;
}

.paiment-label {
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
}

.expiration-column {
  width: 100%;
}

.cvv-input {
  width: 60%;
}

.confirmation-btn-section {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  height: 100%;
}

.btn-primary {
  color: var(--primary);
  font-family: "Galada", cursive;
  border: none;
  border-radius: 3px;
  font-size: 1.6rem;
  transition: all 0.3s ease;
  margin: 50px 60px 0 0;
}

i {
  color: var(--primary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.btn-primary:hover,
.cfa-arrow-right:hover {
  color: var(--cool-blue);
}

@media (max-width: 500px) {
}

@media (max-width: 996px) {
  .information-inline {
    flex-direction: column;
  }
  .btn-primary {
    margin: 55px 0 0 0;
  }
}

@media (max-width: 1200px) {
  .modal-form {
    justify-content:flex-start;
  }
}

@media (max-width: 1600px) {
  .title {
    display: none;
  }
  .modal-form {
    overflow: auto;
  }
  .form-container-top {
    height: auto;
  }
  .payment-section {
    height: auto;
    margin-top: 1rem;
  }

  .info-subtitle {
    margin-bottom: 1rem;
  }

  .btn-primary {
    font-size: 1rem;
  }
  input {
    font-size: small;
  }
  select {
    font-size: small;
  }

  .ccv-input {
    font-size: small;
  }
}
</style>
