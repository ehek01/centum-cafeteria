import axios from "axios";
import apiConfig from "../config/apiConfig";
const {apiUrl} = apiConfig;

const API_SUCCESS = 200;

export default {
  getRestaurantList: async () => {
    // return axios.get(`${apiServer}/restaurant`);
    return axios.get(`https://13.125.250.52:58760/restaurant`);
  },
}
