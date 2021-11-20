import axios from "axios";

const BASE_URL = "http://localhost:8082/ship"

const http = axios.create({
    baseURL: "http://localhost:8082/ship",
    headers: {
        'Content-type': 'application-json'
    }
});

export const getShip = async (id) => {
    const rawResponse = await http.get(`http://localhost:8082/ship/${id}`);
    return rawResponse.data
}
export const getShipList = async (shipClass = '', destination = '') => {
    const rawResponse = await axios.get(`http://localhost:8082/ship?shipClass=${shipClass}&destination=${destination}`)
    return rawResponse.data
}