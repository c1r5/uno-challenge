# Documentação backend

### Resumo Técnico

Estruturei o projeto em módulos e camadas após analisar a stack original.  
Decidi manter JavaScript puro utilizando JSDoc para documentação, priorizando produtividade e clareza.  
Implementei persistência em disco utilizando JSON como datasource.

## Principais Implementações

- **ItemRepository**: manipulação de dados e validação de duplicidades.
- **ItemService**: centralização da lógica de negócio e emissão de eventos.
- **EventBus**: aplicação de Event-Driven Design para promover desacoplamento.
- **NotificationService**: serviço de envio de notificações baseadas em eventos.

## Estratégias Técnicas

- Organização modular focada em escalabilidade.
- Abordagem orientada a eventos para serviços desacoplados.
- Persistência local leve com arquivo JSON.

---


# 📚 Documentação por modulo

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