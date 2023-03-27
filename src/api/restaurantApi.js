import axios from "axios";
import apiConfig from "../config/apiConfig";
const {apiUrl} = apiConfig;

const API_SUCCESS = 200;

export default {
  getRestaurantList: async () => {
    const {resultCode, resultData} = (await axios.get(`${apiUrl}/restaurant`)).data;

    if (resultCode === API_SUCCESS) return resultData;

    return null;
  },
}
