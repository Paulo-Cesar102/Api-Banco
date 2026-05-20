# Api-Banco: Sistema de Gerenciamento Bancário

Este é um projeto completo de um sistema bancário simplificado, composto por uma **API REST (Backend)** e uma **Interface Web (Frontend)**. O sistema permite o cadastro de clientes, abertura de contas e realização de operações financeiras básicas.

## 🏗️ Arquitetura do Projeto

O repositório está dividido em duas partes principais:

- **`/backend`**: API desenvolvida com Node.js, Express, Prisma (ORM) e PostgreSQL.
- **`/frontend`**: Aplicação Web moderna desenvolvida com React, TypeScript, Vite e Axios.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Linguagem:** TypeScript
- **Framework:** Express.js
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma
- **Validação:** Zod
- **Documentação:** Swagger (disponível na rota `/docs`)

### Frontend
- **Framework:** React 19 + Vite
- **Linguagem:** TypeScript
- **Estilização:** CSS Vanilla (Custom Properties)
- **Requisições:** Axios
- **Roteamento:** React Router Dom

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (ou um banco de dados compatível)
- NPM ou Yarn

### 1. Configuração do Backend

1. Entre na pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz da pasta `backend`.
   - Adicione a URL de conexão do seu banco de dados:
     ```env
     DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
     PORT=3000
     ```
4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie o servidor:
   ```bash
   npm run dev
   ```
   *A API estará rodando em `http://localhost:3000`*

### 2. Configuração do Frontend

1. Em um novo terminal, entre na pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a aplicação:
   ```bash
   npm run dev
   ```
   *O frontend estará disponível em `http://localhost:5173`*

---

## 🧪 Seção de Testes (Qualidade e Confiabilidade)

O projeto conta com uma suíte de testes automatizados no Backend para garantir a integridade das operações financeiras e das regras de negócio.

### Como rodar os testes:
1. Navegue até a pasta do backend:
   ```bash
   cd backend
   ```
2. Execute o comando de teste:
   ```bash
   npm run test
   ```
*A suíte utiliza o **Vitest**, uma ferramenta de teste moderna e ultra-rápida, garantindo que as transferências e depósitos sigam rigorosamente as regras do banco.*

---

## 📖 Documentação da API

Após iniciar o backend, você pode acessar a documentação interativa do Swagger em:
`http://localhost:3000/docs`

### Principais Endpoints:
- `POST /clientes`: Cadastra um novo cliente.
- `POST /contas`: Abre uma nova conta bancária.
- `POST /contas/:id/deposito`: Realiza um depósito em uma conta.
- `POST /contas/transferencia`: Realiza transferência entre duas contas.
- `GET /contas/:id/extrato`: Retorna o saldo e histórico de transações.

---

## 📝 Notas de Versão
- **v2.0**: Migração de fetch para Axios, melhorias de UX/UI no frontend e tratamento global de erros.
- **v1.0**: Lançamento inicial com funcionalidades básicas de conta e cliente.

---

## 👨‍💻 Autor
Desenvolvido como um protótipo funcional para sistemas de gestão financeira.
