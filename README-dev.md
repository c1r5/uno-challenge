# Minha Jornada

## Setup inicial
- Fiz um fork do repositorio e Clonei na minha maquina local.
- Ao executar o frontend meu primeiro problema foi na versão do Node onde identifiquei que precisaria fazer downgrade para a versão 16.
- Ambientes levantados com sucesso (`frontend`, `serverless`)
- .env configurado

## Metodos utilizados
- Separei em modulos para melhor entendimento e quebrar o problema em partes menores
- Criei um JSDocs para trabalhar com tipos sem precisar usar o typescript
- Utilizei uma especie de arquitetura em camadas adaptada nesse caso mais simples para evitar overengineering
- Event Driven Architecture para notificação

## Feature Extra
- Notificação de tasks não concluidas há N tempo.
