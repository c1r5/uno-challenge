# 📄 item.service.js

## Descrição
Orquestra validações e delega operações ao repositório de itens.

## Funções

- `get_todolist(filter)`: Lista tarefas.
- `add_item(item)`: Valida e insere tarefa.
- `update_item(item)`: Valida e atualiza tarefa.
- `delete_item(itemId)`: Remove tarefa.

## Observações
- Utiliza `name_validation()` antes de adicionar ou atualizar.
- É a camada entre Resolvers e Repository.