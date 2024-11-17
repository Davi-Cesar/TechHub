import React from "react";
import ReportSelector from "../components/ReportSelector";

const ReportsPage: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold  mb-6 text-center">
        Gerenciamento de Relatórios
      </h2>

      <ReportSelector />
    </div>
  );
};

export default ReportsPage;
