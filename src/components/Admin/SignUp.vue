<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import { useUser } from "@/shared/stores";
import { RouterLink, useRouter } from "vue-router";
import type { UserFormInterface } from "@/shared/interfaces";
const router = useRouter();
const userStore = useUser();
let emptyForm = ref(false);

const confirmation = ref("");
const state = reactive<UserFormInterface>({
  name: "",
  local: {
    email: "",
    password: "",
  },
});

const dirty = computed(() => !!(state.local!.password.length && confirmation.value.length));
const lengthsMatch = computed(() => (state.local!.password.length >= 3 && confirmation.value.length >= 3));
const passwordsMatch = computed(() => state.local!.password === confirmation.value);
const match = computed(() => dirty.value && passwordsMatch.value && lengthsMatch.value);
const error = computed(() => dirty.value && !passwordsMatch.value && !lengthsMatch.value);

const submit = async () => {
  if (state.name === "" || state.local!.email === "" || state.local!.password === "") {
    return emptyForm.value = true;
  } else {
    await userStore.createUser({...state});
    if (!userStore.error) {
      await router.push("/signin");
    }
  }
  emptyForm.value = false;
};
</script>

<template>
  <div class="form container flex flex-column">
    <div class="form-user-info row">
      <h4 class="title">Register</h4>
      <div class="input icon">
        <label for="fullname">Full Name</label>
        <input id="fullname" type="text" placeholder="Your name" v-model="state.name"/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
      <div class="input icon">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Email" v-model="state.local.email"/>
        <div class="input-icon"><i class="fa fa-envelope"></i></div>
      </div>
      <div class="input icon">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Password" v-model="state.local.password" :class="{ error: error, valid: match }"/>
        <div class="input-icon"><i class="fa-solid fa-key"></i></div>
      </div>
      <div class="input icon">
        <label for="password">Confirm your password</label>
        <input id="password" type="password" placeholder="Password" v-model="confirmation" :class="{ error: error, valid: match }"/>
        <div class="input-icon"><i class="fa-solid fa-key"></i></div>
      </div>
      <div v-if="emptyForm">
        <p class="db-error">Please complete all fields</p>
      </div>
      <div>
        <p class="db-error">{{ userStore.error }}</p>
      </div>
      <div>
        <button @click="submit" >Register</button>
        <br><br>
        <p class="register-link">Already registered? Click <RouterLink to="/signin" class="btn-link">HERE</RouterLink></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error {
  background-color: var(--grullo) !important;
}
.container {
  max-width: 35%;
  padding: 2em 4em;
  margin: 10rem auto;
  background-color: var(--light-grey);
  border-radius: 5px;
  box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.2);
}
@media only screen and (max-width: 2800px) {
  .container {
    max-width: 500px;
  }
}
@media only screen and (max-width: 1200px) {
  .container {
    max-width: 45%;
  }
}
@media only screen and (max-width: 700px) {
  .container {
    max-width: 50%;
  }
}
@media only screen and (max-width: 500px) {
  .container {
    max-width: 90%;
  }
}

.form-user-info {
  padding: 30px;
}
.title {
  margin: 1rem 0 3rem;
  text-transform: uppercase;
  color: var(--main-color);
}
.btn-link {
  color: var(--main-color);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bolder;
}

input {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: none;
  border-radius: 3px;
  transition: all 0.35s ease-in-out;
}
input:focus {
  outline: 0;
  border-color: var(--main-color);
}
input:focus + .input-icon i,
select:focus + .input-icon i {
  color: var(--main-color);
}
input:focus + .input-icon:after,
select:focus + .input-icon:after {
  border-right-color: var(--main-color);
}
.input {
  margin-bottom: 2em;
}
.icon {
  position: relative;
  margin: 60px 0;
}
.icon input {
  padding-left: 5.4em;
}
.icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.icon .input-icon:after {
  position: absolute;
  top: 0.3em;
  bottom: 0.7em;
  left: 3.4em;
  display: block;
  border-right: 1px solid var(--grey);
  content: "";
  transition: all 0.35s ease-in-out;
}
label {
  position: absolute;
  bottom: 3.5rem;
  font-size: 0.9em;
  color: var(--brown);
}

.icon .input-icon i {
  transition: all 0.35s ease-in-out;
}
button {
  width: 100%;
  padding: 1em;
  background-color: var(--main-color);
  border: 0;
  border-radius: 3px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
}
.register-link {
  text-align: center;
}
</style>