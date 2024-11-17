import React, { useState } from "react";

import { StockReport } from "./StockReport";
import { SalesReport } from "./SalesReport";

const ReportSelector: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<string>("stock");

  const componentMap: Record<string, JSX.Element> = {
    stock: <StockReport />,
    sales: <SalesReport />,
  };

  function selectReport(event: any) {
    setSelectedReport(event.target.value);
    console.log("mudança de evento: " + event.target.value);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 ">TechHub - Relatórios</h1>
      <div className="mb-6">
        <label className="mr-4  font-semibold">Selecione o Relatório:</label>
        <select
          className="p-2 border rounded"
          value={selectedReport}
          onChange={selectReport}
        >
          <option value="stock">Relatório de Estoque</option>
          <option value="sales">Relatório de Vendas</option>
        </select>
        {componentMap[selectedReport]}
      </div>
    </div>
  );
};

export default ReportSelector;
