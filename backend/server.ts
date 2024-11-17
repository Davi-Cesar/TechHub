// server.ts
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
const PORT = 8080;

app.get("/sales", async (req: Request, res: Response) => {
  try {
    const salesReports = await prisma.sale.findMany({
      include: {
        Produto: true,
      },
    });
    res.json(salesReports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar relatórios de vendas" });
  }
});

app.get("/stocks", async (req: Request, res: Response) => {
  try {
    const stockReports = await prisma.stock.findMany({
      include: {
        Stales: true, // Inclui informações das vendas associadas, se necessário
      },
    });
    res.json(stockReports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar relatórios de estoque" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post("/add-sale", async (req: Request, res: Response) => {
  const { produtoId, quantidadeVendida, valorTotal, dataVenda, estoque } =
    req.body;

  try {
    const newSale = await prisma.sale.create({
      data: {
        produtoId,
        quantidadeVendida,
        valorTotal,
        dataVenda: new Date(dataVenda),
        estoque,
      },
    });
    res.status(201).json(newSale);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar venda" });
  }
});
