# 📄 validate_item.js

## Descrição
Contém funções de validação de dados para itens.

## Funções

- `name_validation(item)`: Verifica nome vazio ou inválido.
- `name_existence_check(item, todolist)`: Verifica nome duplicado.
- `id_existence_check(itemId, todolist)`: Verifica existência de ID.

## Observações
- Funções puras, isoladas, sem efeitos colaterais.
- Importadas em `item.repository.js` e `item.service.js`.