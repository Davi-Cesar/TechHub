// columns.ts
import { createColumnHelper } from "@tanstack/react-table";
import { Sales } from "../types/reportTypes";

const columnHelper = createColumnHelper<Sales>();

export const columns = [
  columnHelper.accessor("Produto.nome", {
    header: () => "Produto",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("quantidadeVendida", {
    header: () => "Quantidade Vendida",
  }),
  columnHelper.accessor("valorTotal", {
    header: "Valor Total",
  }),
  columnHelper.accessor("dataVenda", {
    header: "Data",
    cell: (info) => {
      const data = new Date(info.getValue());
      const formatador = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
      });
      return formatador.format(data);
    },
  }),
];
