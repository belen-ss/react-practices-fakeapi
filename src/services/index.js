import axios from "axios";

// Aquí hacemos el método GET a la API
export const getProducts = async () => {
  try {
    const response = await axios({
      url: "https://fakestoreapi.com/products",
      method: "GET"
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
