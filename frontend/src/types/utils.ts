// utils.ts
import { Sales } from "../types/reportTypes";

export const filterSalesByDate = (
  sales: Sales[],
  startDate: string,
  endDate: string
): Sales[] => {
  return sales.filter((sale) => {
    const saleDate = new Date(sale.dataVenda);
    return saleDate >= new Date(startDate) && saleDate <= new Date(endDate);
  });
};
