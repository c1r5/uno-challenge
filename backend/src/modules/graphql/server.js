import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

import typeDefs from "./schema.js"
import { generateResolvers } from "./resolvers.js";
import { ItemRepository } from "../item/infra/repositories/item.repository.js";
import { ItemService } from "../item/application/services/item.service.js";

export default async function startServer() {
  const item_repository = new ItemRepository();
  const item_service = new ItemService(item_repository);
  const resolvers = generateResolvers(item_service);
  
  const server = new ApolloServer({ typeDefs, resolvers })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })

  console.log(`🚀  Server ready at: ${url}`)
}
