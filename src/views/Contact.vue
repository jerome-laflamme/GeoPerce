<script setup lang="ts">
import { reactive } from "vue";
import { sendForm } from "@/shared/services/contact.service";

const state = reactive<{
  name: string;
  email: string;
  phone: string;
  message: string;
  error: string;
  sent: boolean;
}>({
  name: "",
  email: "",
  phone: "",
  message: "",
  error: "",
  sent: false,
});

const validatePhone = () => {
  return /^\d+$/.test(state.phone) && state.phone.length === 10;
};

const validateEmail = () => {
  return /\S+@\S+\.\S+/.test(state.email);
};

const validateForm = () => {
  state.sent = false;
  if (state.name && state.message && validateEmail() && validatePhone()) {
    try {
      state.sent = true;
      sendForm(state);
      state.error = "Message Envoyé! Merci!";
    } catch (e) {
      console.log(e);
      state.error = "Un problème est survenue, désolé";
    }
  } else {
    state.error = "Veuillez remplir tout les champs";
  }
};

const inputStyle = 'bg-[var(--ivory)] mt-5 w-[75%] rounded-md border none'
</script>

<template>
  <div class="h-screen flex items-start pt-[6rem] relative">
    <div
      class="bg-[#2e3e2c] h-[80vh] w-2/5 border-radius rounded-[1rem] ml-[2rem] mt-[4rem] relative"
    >
      <div class="absolute top-[3.5vh] left-[40%]">
        <div
          class="img-filter h-[70vh] w-[70vw] border-radius rounded-[1rem] bg-[url('../assets/img/paddle_contact.jpg')] bg-cover bg-no-repeat absolute"
        ></div>

        
        <div class="contact-container bg-[var(--cool-blue)] opacity-95 py-6 w-[25vw] top-[8vh] left-20 border-radius rounded-[1rem] absolute flex flex-col justify-around items-center">

          <h1 class="mt-6 text-8xl text-[var(--ivory)] underline font-[100]">Contact</h1>
          <p>Ecrivez-nous un message, nous vous répondrons sous peu!</p>
          <input
            v-model="state.name"
            type="text"
            placeholder="Nom"
            :class="inputStyle"
          />
          <input
            v-model="state.email"
            type="text"
            placeholder="Email"
            :class="inputStyle"
          />
          <input
            v-model="state.phone"
            type="tel"
            maxlength="10"
            placeholder="Téléphone"
            :class="inputStyle"
          />
          <textarea
            v-model="state.message"
            id="message"
            placeholder="Posez votre question ici."
            :class="inputStyle"
            class="h-[10rem] mb-5"
          ></textarea>
          <p
            v-bind:class="{
              error: !state.sent,
              sent: state.sent,
            }"
          >
            {{ state.error }}
          </p>
          <button @click="validateForm">Envoyer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.38);
  min-width: 400px;
}
.img-filter {
  filter: saturate(0.5);
}
.error {
  color: var(--red);
}
.sent {
  color: var(--primary);
}
button {
  background-color: var(--light-grey);
  color: var(--dark-grey);
  padding: 8px 25px;
  width: 250px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid var(--dark-grey);
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: 0.3s ease-in;
}
button:hover {
  background-color: var(--dark-grey);
  color: var(--light-grey);
  border: 1px solid var(--light-grey);
}
h1 {
  font-family: galada;
  justify-content: space-around;
  align-items: center;
}

textarea::placeholder,
input::placeholder {
  color: #636363;
  padding-left: 4px;
}

input,
textarea {
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.38);
  resize: none;
  border-radius: 3px;
}

p {
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
  width: 70%;
  color: #636363;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
}
</style>
