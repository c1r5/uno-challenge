# 📄 item.repository.js

## Descrição
Realiza operações de acesso e manipulação dos itens no datasource.

## Funções

- `find(filter)`: Busca tarefas com filtro opcional.
- `insert(item)`: Adiciona tarefa validando duplicidade.
- `update(item)`: Atualiza dados de uma tarefa.
- `delete(itemId)`: Remove uma tarefa.

## Observações
- Valida dados com funções externas de domínio (`validate_item.js`).
- Persiste alterações usando `datasource.persist()`.