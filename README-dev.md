# Minha Jornada

## Setup inicial
- Fiz um fork do repositorio e Clonei na minha maquina local.
- Ao executar o frontend meu primeiro problema foi na versão do Node onde identifiquei que precisaria fazer downgrade para a versão 16.
- Ambientes levantados com sucesso (`frontend`, `backend`)
- .env configurado

## Metodos utilizados
- Separei em modulos para melhor entendimento e quebrar o problema em partes menores
- Criei um JSDocs para trabalhar com tipos sem precisar usar o typescript
- Utilizei uma especie de arquitetura em camadas adaptada nesse caso mais simples para evitar overengineering
- Event Driven Architecture para notificação

## Funcionalidades

- Adicionar novos itens à lista.
- Editar itens existentes.
- Remover itens da lista.
- Validar itens para evitar nomes duplicados ou campos vazios.
- Filtrar itens por nome ou ID.
- Persistência dos dados via arquivos JSON.

---
# Documentação backend

## Setup local

### Baixar
Clone o repositório:
```bash
git clone https://github.com/c1r5/uno-challenge
cd uno-challenge
```
### Instalar dependências
No frontend:
```bash
cd frontend
yarn install
```
---
Variáveis de ambiente no frontend: 
```
REACT_APP_GRAPHQL_URI=http://localhost:4000/graphql
``` 
---
No backend:
```bash
cd backend
yarn install
```
---
### Iniciar servidores
No backend:
```bash
cd backend
yarn start
```
---
No frontend
```bash
cd frontend
yarn start
```
---
### Acesso
- Frontend: [Pagina do projeto](http://localhost:3000)
- backend: [GraphQL Playground](http://localhost:4000/graphql)

---
# Documentação detalhada sobre o Backend

# 📚 Documentação detalhada sobre o Backend

## Módulos

- [Inicialização da aplicação - index.js](./backend/src/index.md)
- [Servidor Apollo - server.js](./backend/src/modules/graphql/server.md)
- [Schema GraphQL - schema.js](./backend/src/modules/graphql/schema.md)
- [Resolvers GraphQL - resolvers.js](./backend/src/modules/graphql/resolvers.md)
- [Fonte de dados - db.js](./backend/src/modules/item/infra/db/db.md)
- [Repositório de Itens - item.repository.js](./backend/src/modules/item/infra/repositories/item.repository.md)
- [Serviço de Itens - item.service.js](./backend/src/modules/item/application/services/item.service.md)
- [Validações de Itens - validate_item.js](./backend/src/modules/item/domain/validate_item.md)
- [Utilitários de Itens - item.utils.js](./backend/src/modules/item/application/utils/item.utils.md)
- [Tipos JSDoc - types.js](./backend/src/modules/shared/types.md)
- [Serviço de Notificação - notification.service.js](./backend/src/modules/shared/application/services/notification-service.md)
- [Gerenciador de Eventos - create-eventbus.js](./backend/src/modules/shared/application/events/create-eventbus.md)