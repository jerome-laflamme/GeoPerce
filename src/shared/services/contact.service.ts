import axios from "axios";

const BASE_URL = "https://devlo15.team/api/contact";

export const sendForm = async (data:any) => {
    await axios.post(BASE_URL,data)
}