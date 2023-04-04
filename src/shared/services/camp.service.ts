import type {PartialCampInterface, CampInterface} from "@/shared/interfaces";
import axios from "axios";

const BASE_URL = "https://devlo15.team/api/camp";

export async function createCamp(camp: PartialCampInterface): Promise<PartialCampInterface | null> {
    const response = await axios.post(`${BASE_URL}/save`, camp);
    if (!response.data.error) {
        return response.data;
    } else {
        throw new Error(response.data.error);
    }
}

export async function updateCamp(camp: PartialCampInterface): Promise<CampInterface | null> {
    const response = await axios.post(`${BASE_URL}/update`, camp);
    if (!response.data.error) {
        return response.data;
    } else {
        throw new Error(response.data.error);
    }
}
export async function fetchCamps(): Promise<CampInterface[]> {
    const response = await axios.get(`${BASE_URL}`);
    if (!response.data.error) {
        return response.data;
    }else{
        throw new Error(response.data.error);
    }
}
export async function deleteOneCamp(id: Number): Promise<CampInterface | null> {
    const response = await axios.post(`${BASE_URL}/${id}`);
    if (!response.data.error) {
        return response.data;
    }else{
        throw new Error(response.data.error);
    }
}