import axios from "axios";

const API_URL = "https://okaarunn.github.io/giant_data/db.json";

const api = {
  getCategories: async () => {
    const res = await axios.get(API_URL);
    return res.data.categories;
  },

  getProducts: async () => {
    const res = await axios.get(API_URL);
    return res.data.products;
  },
  getCarts: async () => {
    const res = await axios.get(API_URL);
    return res.data.carts;
  },
  getOrders: async () => {
    const res = await axios.get(API_URL);
    return res.data.orders;
  },
};

export default api;
