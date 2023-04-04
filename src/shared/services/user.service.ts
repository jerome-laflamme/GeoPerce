import type {UserFormInterface, UserInterface} from "../interfaces";
import axios from "axios";

const BASE_URL = "https://devlo15.team/api/users";


export async function createUser(partialUser: UserFormInterface): Promise<UserInterface | null> {
    const response = await axios.post(BASE_URL, partialUser);
    if (!response.data.error) {
        return response.data;
    } else {
        throw new Error(response.data.error);
    }
}

export async function updateUser(partialUser: UserFormInterface): Promise<UserInterface | null> {
    const response = await axios.post(`${BASE_URL}/update`, {params: {user: partialUser}});
    if (!response.data.error) {
        return response.data;
    } else {
        throw new Error(response.data.error);
    }
}

export async function fetchCurrentUser(): Promise<UserInterface | null> {
    return await (await fetch(`${BASE_URL}`)).json()
}