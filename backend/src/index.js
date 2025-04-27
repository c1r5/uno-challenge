import { createResolvers } from "./modules/graphql/resolvers.js";
import { createItemService } from "./modules/item/application/services/item.service.js";
import { createDatasource } from "./modules/item/infra/db/db.js"
import { createItemRepository } from "./modules/item/infra/repositories/item.repository.js";

import startServer from "./modules/graphql/server.js"

async function bootstrap() {
  const datasource = createDatasource('db.json');
  const repository = createItemRepository(datasource)
  const service = createItemService(repository)
  const resolvers = await createResolvers(service)

  await datasource.initialize()
  await startServer(resolvers)
}

bootstrap()