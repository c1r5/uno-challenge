import { createResolvers } from "./modules/graphql/resolvers.js";
import { createItemService } from "./modules/item/application/services/item.service.js";
import { createDatasource } from "./modules/shared/infra/db/db.js"
import { createItemRepository } from "./modules/item/infra/repositories/item.repository.js";

import startServer from "./modules/graphql/server.js"
import { createEventBus } from "./modules/shared/application/events/create-eventbus.js";
import { createNotificationService } from "./modules/shared/application/services/notification.service.js";

async function bootstrap() {
  const datasource = createDatasource('db.json');
  await datasource.initialize();

  const eventbus = createEventBus();
  const repository = createItemRepository(datasource);
  const service = createItemService(repository, eventbus);
  const resolvers = createResolvers(service);


  service.monitor_pending_items()
  createNotificationService(eventbus)
  
  await startServer(resolvers);
}

bootstrap()