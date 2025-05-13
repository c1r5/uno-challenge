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


# Documentação por modulo

## Módulos

- [Inicialização da aplicação - index.js](./src/index.md)
- [Servidor Apollo - server.js](./src/modules/graphql/server.md)
- [Schema GraphQL - schema.js](./src/modules/graphql/schema.md)
- [Resolvers GraphQL - resolvers.js](./src/modules/graphql/resolvers.md)
- [Fonte de dados - db.js](./src/modules/item/infra/db/db.md)
- [Repositório de Itens - item.repository.js](./src/modules/item/infra/repositories/item.repository.md)
- [Serviço de Itens - item.service.js](./src/modules/item/application/services/item.service.md)
- [Validações de Itens - validate_item.js](./src/modules/item/domain/validate_item.md)
- [Utilitários de Itens - item.utils.js](./src/modules/item/application/utils/item.utils.md)
- [Tipos JSDoc - types.js](./src/modules/shared/types.md)
- [Serviço de Notificação - notification.service.js](./src/modules/shared/application/services/notification-service.md)
- [Gerenciador de Eventos - create-eventbus.js](./src/modules/shared/application/events/create-eventbus.md)
