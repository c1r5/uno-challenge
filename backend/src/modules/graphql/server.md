# 📄 server.js

## Descrição
Inicializa o Apollo Server e sobe o backend GraphQL.

## Funções

- `startServer()`
  - Cria uma instância do Apollo Server com `typeDefs` e `resolvers`.
  - Sobe o servidor na porta `4000`.

## Observações
- Utiliza `@apollo/server` e `@apollo/server/standalone`.
- Backend exposto em `http://localhost:4000/graphql`.