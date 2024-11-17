import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.stock.createMany({
    data: [
      {
        nome: "Produto A",
        categoria: "Categoria A",
        fabricante: "Fabricante A",
        quantidade: 100,
        preco: 20.0,
      },
      {
        nome: "Produto B",
        categoria: "Categoria B",
        fabricante: "Fabricante B",
        quantidade: 200,
        preco: 50.0,
      },
      {
        nome: "Produto C",
        categoria: "Categoria C",
        fabricante: "Fabricante C",
        quantidade: 250,
        preco: 80.0,
      },
    ],
  });

  await prisma.sale.createMany({
    data: [
      {
        produtoId: 1,
        quantidadeVendida: 10,
        valorTotal: 200.0,
        dataVenda: new Date(),
        estoque: 90,
      },
      {
        produtoId: 2,
        quantidadeVendida: 5,
        valorTotal: 250.0,
        dataVenda: new Date(),
        estoque: 195,
      },
      {
        produtoId: 3,
        quantidadeVendida: 5,
        valorTotal: 250.0,
        dataVenda: new Date(),
        estoque: 195,
      },
    ],
  });

  console.log("Dados inseridos com sucesso!");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
