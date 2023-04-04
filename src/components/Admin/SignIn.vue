<script setup lang="ts">
import { reactive } from "vue";
import type { SigninFormInterface } from "@/shared/interfaces";
import { RouterLink, useRouter } from "vue-router";
import { useUser } from "@/shared/stores";

const router = useRouter();
const userStore = useUser()

const state = reactive<SigninFormInterface>({
  local:{
    email: "",
    password: "",
  }
});

const submit = async () => {
  await userStore.signIn( {...state} );
  if(!userStore.error) {
    await router.push("/crud");
  }else{
    console.log(userStore.error)
  }
};
</script>
<template>
  <div class="form container flex flex-column">
    <div class="form-user-info row">
      <h4 class="title">Vous devez vous identifier</h4>
      <div class="input icon">
        <input id="email" type="email" placeholder="Email" v-model="state.local.email"/>
      </div>
      <div class="input icon">
        <input id="password" type="password" placeholder="Password" v-model="state.local.password"/>
      </div>
      <div>
        <p>
          {{ userStore.error }}
        </p>
      </div>
      <div>
        <button @click="submit">Connexion</button>
        <br><br>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 6rem auto;
  height: 27rem;
  background-color: var(--cool-blue);
  border-radius: 5px;
  box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.title {
  margin: 1rem 0 3rem;
  text-transform: uppercase;
  color: var(--dark-grey);
}
input {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: var(--light-grey);
  border: none;
  border-radius: 3px;
}
.input {
  margin-bottom: 2em;
}
button {
  width: 100%;
  padding: 1em;
  background-color: var(--light-grey);
  border: 0;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
}
.form-user-info {
  height: 100%;
}
</style>