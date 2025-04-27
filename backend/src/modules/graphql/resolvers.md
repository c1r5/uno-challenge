# 📄 resolvers.js

## Descrição
Implementa as resolvers das Queries e Mutations definidas no `schema.js`.

## Funções

- **Query**
  - `getTodoList`: Chama `itemService.get_todolist()`.

- **Mutation**
  - `addItem`: Chama `itemService.add_item()`.
  - `updateItem`: Chama `itemService.update_item()`.
  - `deleteItem`: Chama `itemService.delete_item()`.

## Observações
- Instancia `itemRepository` e `itemService` no carregamento.