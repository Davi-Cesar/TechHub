// api.ts
import axios from "axios";

export const fetchStocks = async () => {
  try {
    const response = await axios.get("http://localhost:8080/stocks");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os estoques:", error);
    throw error;
  }
};
