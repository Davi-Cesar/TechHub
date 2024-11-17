export type Stock = {
  id: number;
  nome: string;
  categoria: string;
  fabricante: string;
  quantidade: number;
  preco: number;
};

export type Sales = {
  id: number;
  produtoId: string;
  quantidadeVendida: number;
  valorTotal: number;
  dataVenda: Date;
  Produto: Stock;
};
