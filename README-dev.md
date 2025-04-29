# Desenvolvimento

## [Documentação frontend](./frontend/README.md)

## [Documentação backend](./backend/README.md)

## Baixar
Clone o repositório:
```bash
git clone https://github.com/c1r5/uno-challenge
cd uno-challenge
```

## Setup com Docker

### Construir e iniciar os containers
Execute os comandos abaixo para construir e iniciar os containers Docker:
```bash
docker-compose up --build
```

### Variáveis de ambiente
Certifique-se de configurar as variáveis de ambiente no arquivo `.env` para o backend e frontend, conforme necessário.

### Parar os containers
Para parar os containers, execute:
```bash
docker-compose down
```

## Setup sem Docker

### Instalar dependências
No frontend:
```bash
cd frontend
yarn build
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
yarn global add serve
serve -s build
```
---

## Acesso
- Frontend: [Pagina do projeto](http://localhost:3000)
- backend: [GraphQL Playground](http://localhost:4000/graphql)