// src/App.tsx

import React from "react";
import ReportsPage from "./pages/ReportsPage";

const App: React.FC = () => {
  return (
    <div className="App bg-slate-200  min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center ">
          TechHub - Sistema de Relatórios
        </h1>
        <p className="text-center ">Relatórios de Estoque e Vendas</p>
      </header>

      <ReportsPage />

      <footer className="mt-12 text-center text-gray-500">
        <p>© 2024 TechHub - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
