import type {MarkerInterface} from '@/shared/interfaces';
import {defineStore} from 'pinia'
import axios from "axios"

export interface MapState{
    markers:MarkerInterface[];
    filters: Array<string>;
    activeModal: boolean;
    selectedMarker: MarkerInterface | null;
    centerPoint: Array<number>;
}

export const useMap = defineStore('map', {
    state: () => ({
        markers:[],
        filters:["camping","restaurant","hiking","poi"],
        activeModal : false,
        selectedMarker: {} as MarkerInterface,
        centerPoint: [48.52, -64.21],
    }),

    getters:{
        getMarkers(state: MapState): MarkerInterface[] {
            return state.markers
        },
    },

    actions:{
        async fetchMarkers(){
            try{
                const data = await axios.get("https://devlo15.team/api/map/",{
                    params: { 
                        filters:this.filters,
                    }
                })
                this.markers = data.data
            }catch(e){
                console.log(e)
            }
        },
        nextMarker(type: any): MarkerInterface | null {
            this.activeModal = true;
            const markers = this.markers.filter((marker) => marker.type == type);
            const filteredMarkers = [...markers];
            const currentIndex = filteredMarkers.findIndex((marker) => marker === this.selectedMarker);
            const nextIndex = (currentIndex + 1) % filteredMarkers.length;
            this.selectedMarker = filteredMarkers[nextIndex];
            return this.selectedMarker;
        }
    },
})