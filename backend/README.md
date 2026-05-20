# Backend - Api-Banco

Este é o servidor de API para o sistema bancário, construído com foco em escalabilidade, tipos fortes e segurança.

## 🚀 Tecnologias
- **Node.js** & **Express**
- **TypeScript** para tipagem estática
- **Prisma ORM** para interação com o banco de dados
- **Zod** para validação de dados (Schema validation)
- **Vitest** para testes unitários e de integração
- **Swagger** para documentação da API

## 📋 Pré-requisitos
- Node.js v18+
- Instância do PostgreSQL ativa

## ⚙️ Instalação e Configuração

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure o arquivo `.env`:
   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
   PORT=3000
   ```

3. Sincronize o banco de dados:
   ```bash
   npx prisma migrate dev
   ```

4. (Opcional) Gere o cliente Prisma manualmente se necessário:
   ```bash
   npx prisma generate
   ```

## 🧪 Testes Automatizados
Este projeto prioriza a confiabilidade das transações. Utilizamos o **Vitest** para realizar testes de unidade e integração.

Para rodar os testes:
```bash
npm run test
```

Os testes cobrem cenários críticos como:
- Validação de saldo suficiente para transferências.
- Fluxo de sucesso em depósitos.
- Lógica de negócio dos serviços de transação.

## 🛠️ Scripts Disponíveis
- `npm run dev`: Inicia o servidor em modo de desenvolvimento com hot-reload.
- `npm run build`: Compila o código TypeScript para JavaScript na pasta `dist`.
- `npm run start`: Inicia o servidor em modo de produção (requer build).
- `npm run test`: Executa a suíte de testes usando Vitest.

## 📚 Documentação
A documentação completa das rotas, parâmetros e formatos de resposta pode ser encontrada na rota `/docs` quando o servidor estiver rodando.

---
Desenvolvido com ❤️ para gestão financeira.
