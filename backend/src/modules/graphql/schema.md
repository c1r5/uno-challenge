# 📄 schema.js

## Descrição
Define os tipos (Types), entradas (Inputs), Queries e Mutations do GraphQL.

## Principais Elementos

- **Type `Item`**
  - Representa uma tarefa (id, nome, descrição, status, timestamps).

- **Inputs**
  - `Filter`: Filtro opcional para listar tarefas.
  - `AddItemInput`: Campos obrigatórios para criar tarefa.
  - `UpdateItemInput`: Campos para atualizar tarefa.

- **Query**
  - `getTodoList(filter: Filter)`: Lista tarefas filtradas.

- **Mutations**
  - `addItem(values: AddItemInput!)`
  - `updateItem(values: UpdateItemInput!)`
  - `deleteItem(itemId: Int!)`