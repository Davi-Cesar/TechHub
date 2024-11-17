// api.ts
import axios from "axios";

export const fetchSales = async () => {
  try {
    const response = await axios.get("http://localhost:8080/sales");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os estoques:", error);
    throw error;
  }
};
