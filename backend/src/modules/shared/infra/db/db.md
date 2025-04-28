# 📄 db.js

## Descrição
Gerencia a persistência da lista de tarefas (`todolist`) em um arquivo JSON local.  
Controla a leitura, escrita e atualização da lista de forma consistente entre memória e disco.

## Funções

- `initialize()`:  
  Inicializa o datasource.  
  Se o arquivo existir, carrega os dados na memória.  
  Se não existir, cria o arquivo com uma lista vazia.

- `getTodolist()`:  
  Retorna a lista de tarefas atual em memória.

- `persist(newList)`:  
  Atualiza a lista de tarefas em memória e persiste imediatamente no disco.

- `synchronize()`:  
  Recarrega a lista de tarefas a partir da versão atual do disco, sobrescrevendo a memória.

## Observações

- Utiliza `fs` e `fs/promises` nativos do Node.js.
- Trabalha com JSON como um banco de dados local simples.
- Garante consistência entre memória e arquivo: alterações são persistidas explicitamente.
- Não sobrescreve o arquivo sem necessidade, protegendo dados de corrupção ou concorrência.