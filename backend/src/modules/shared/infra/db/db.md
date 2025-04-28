# 📄 db.js

## Descrição
Gerencia a persistência da lista de tarefas em um arquivo JSON.

## Funções

- `initialize()`: Carrega ou cria o arquivo.
- `get_todolist()`: Retorna tarefas atuais.
- `persist()`: Salva tarefas no disco.

## Observações
- Usa `fs` e `fs/promises` nativos do Node.js.
- Trabalha com JSON como "banco de dados" local.