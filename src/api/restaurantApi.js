import axios from "axios";

const apiServer = __DEV__ ? process.env.DEV_API_SERVER : process.env.PROD_API_SERVER;

export default {
  getRestaurantList: async () => {
    console.error("@@",apiServer);
    // return axios.get(`${apiServer}/restaurant`);
    return axios.get(`https://13.125.250.52:58760/restaurant`);
  },
}
