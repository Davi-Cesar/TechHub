import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Sales } from "../types/reportTypes";
import { fetchSales } from "../api/sales";
import ButtonPDF from "./ButtonPDF";
import { columns } from "../types/column";

export function SalesReport() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [sales, setSales] = useState<Sales[]>([]); // Dados originais
  const [filteredSales, setFilteredSales] = useState<Sales[]>([]); // Dados filtrados

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSales();
      setSales(data);
      setFilteredSales(data);
    };

    fetchData();
  }, []);

  const handleFilterByDate = () => {
    if (startDate && endDate) {
      const filtered = sales.filter((sale: Sales) => {
        const saleDate = new Date(sale.dataVenda);
        return saleDate >= new Date(startDate) && saleDate <= new Date(endDate);
      });
      setFilteredSales(filtered); // Atualiza os dados filtrados
    } else {
      console.error("Por favor, selecione datas de início e fim.");
    }
  };

  const handleResetFilters = () => {
    setStartDate("");
    setEndDate("");
    setFilteredSales(sales);
  };

  const table = useReactTable({
    data: filteredSales,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleGeneratePDF = useReactToPrint({
    contentRef: contentRef,
    documentTitle: "Relatório de Vendas",
  });

  return (
    <>
      <div className="p-4 border rounded" ref={contentRef}>
        <h2 className="text-xl font-semibold mb-4">Relatório de Vendas</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border rounded"
          />
          <button className="btn-1 btn-secundary" onClick={handleFilterByDate}>
            Filtrar
          </button>
          <button className="btn-1 btn-primary" onClick={handleResetFilters}>
            Resetar
          </button>
        </div>
        <table className="table-auto w-full mb-4">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-2 border">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 border">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonPDF onClick={handleGeneratePDF} />
    </>
  );
}
