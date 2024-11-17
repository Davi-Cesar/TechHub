import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import ButtonPDF from "./ButtonPDF";
import { Stock } from "../types/reportTypes";
import { fetchStocks } from "../api/stocks";

const columnHelper = createColumnHelper<Stock>();

const columns = [
  columnHelper.accessor("nome", {
    header: () => "Produto",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("quantidade", {
    header: () => <span>Quantidade</span>,
  }),
  columnHelper.accessor("categoria", {
    header: "Categoria",
  }),
  columnHelper.accessor("fabricante", {
    header: "Fabricante",
  }),
];

export function StockReport() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStocks();
      setStocks(data);
    };

    fetchData();
  }, []);

  const table = useReactTable({
    data: stocks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleGeneratePDF = useReactToPrint({
    contentRef: contentRef,
    documentTitle: "Relatório de Estoque",
  });

  return (
    <>
      <div className="p-4 border rounded" ref={contentRef}>
        <h2 className="text-xl font-semibold mb-4">Relatório de Stock</h2>

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
