import { defineStore } from "pinia";
import type { CampInterface, PartialCampInterface } from "@/shared/interfaces";
import {fetchCamps, updateCamp, deleteOneCamp, createCamp} from "@/shared/services/camp.service";

export interface CampState {
    camps: PartialCampInterface[];
}

export const useCamp = defineStore("camp", {
    state: (): CampState => ({
        camps: [],
    }),

    getters: {
        getCamps(state: CampState): PartialCampInterface[] {
            return state.camps;
        },
    },

    actions: {

        async fetchCamps(): Promise<PartialCampInterface | void> {
            try{
                this.camps = await fetchCamps()
            }catch(e){
                console.log(e)
            }
        },

        async deleteCamp(id:Number): Promise<PartialCampInterface | void> {
            try{
                await deleteOneCamp(id)
                await fetchCamps()
            }catch(e){
                console.log(e)
            }
        },

        async createCamp(camp: PartialCampInterface): Promise<PartialCampInterface | void> {
            try{
                await createCamp(camp)
                await fetchCamps()
            }catch (e) {
                console.log(e)
            }
        },

        async updateCamp(camp: PartialCampInterface): Promise<PartialCampInterface | void> {
            try{
                console.log(camp)
                await updateCamp(camp);
            }catch (e) {
                console.log(e);
            }

        },


    },
});
