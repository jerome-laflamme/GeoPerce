import { defineStore } from "pinia";
import { signIn, createUser, updateUser, fetchCurrentUser, signOut } from "../services";
import type { UserInterface, SigninFormInterface, UserFormInterface } from "@/shared/interfaces";

interface UserState {
  //Ici currentUser = undefined veut dire qu'on a pas encore fait de fetchCurrentUser
  //S'il est à null c'est qu'on a fait le fetchCurrentUser et qu'on a pas de user
  currentUser: UserInterface | null | undefined;
  error: any;
}

export const useUser = defineStore("user", {
  state: (): UserState => ({
    currentUser: undefined,
    error: null,
  }),
  
  getters: {
    isAuthenticated(): boolean {
      return this.currentUser !== undefined && this.currentUser !== null;
    },
  },
  actions: {

    async createUser(data: UserFormInterface) {
      try {
        this.currentUser = await createUser(data);
        this.error = null;
      } catch (error: any) {
        this.currentUser = undefined;
        this.error = error.message;
      }
    },

    async updateUser() {
      try {
        const user = this.currentUser;
        await updateUser(user as UserFormInterface);   //TODO: may be a bug here
        this.error = null;
      } catch (error: any) {
        this.currentUser = undefined;
        this.error = error.message;
      }
    },

    async signIn(data: SigninFormInterface) {
      try {
        this.currentUser = await signIn(data);
        this.error = null;
      } catch (error: any) {
        this.currentUser = undefined;
        this.error = error;
      }
    },
    async fetchCurrentUser() {
      try {
        this.currentUser = await fetchCurrentUser();

        this.error = null
      } catch (error: any) {
        this.currentUser = null;
        this.error = error;
      }
    },

    async signOut() {
      try {
        console.log("signout in the store")
        await signOut();
        this.currentUser = null;
        this.error = null;
      }catch(error: any) {
        this.error = error;
      }
    }
  },
});
