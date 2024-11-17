# **TechHub - Sistema de Relatórios de Vendas e Estoques**

---

### **Frontend**

- **React** com **TypeScript**: para construção da interface do usuário.
- **Tailwind CSS** e **DaisyUI**: para estilização moderna e responsiva.
- **TanStack Table**: para exibição de tabelas dinâmicas.
- **React-To-Print**: para geração de relatórios em PDF.

### **Backend**

- **Node.js** com **Express**: para criar APIs RESTful.
- **Prisma**: como ORM para interagir com o banco de dados.
- **MySQL**: banco de dados para armazenar os dados de vendas e estoque.

## **🚀 Como Executar o Projeto**

### **Pré-requisitos**

Antes de começar, você precisa ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 18+)
- [MySQL](https://www.mysql.com/) ou outro banco de dados compatível
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/) (para gerenciar dependências)

### **1. Configuração do Backend**

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/techhub.git
   ```

2. Navegue até o diretório backend:
   `bash cd backend `

3. Instale as dependências do backend:
   `bash yarn install `

4. Configure o banco de dados no arquivo .env:
   `bash DATABASE_URL="mysql://usuario:senha@localhost:3306/techhub" `

5. Execute as migrations do Prisma para configurar o banco de dados:
   `bash npx prisma migrate dev `

6. (Opcional) Execute o seed para popular o banco com dados de exemplo:
   `bash npx prisma db seed `

7. Inicie o servidor de desenvolvimento:
   `bash yarn start `

### **2. Configuração do Frontend**

1. Navegue até o diretório frontend:
   `bash cd frontend `

2. Instale as dependências do frontend:
   `bash yarn install `

3. Inicie o servidor de desenvolvimento:
   `bash yarn start `

---
