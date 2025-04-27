import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import typeDefs from "./schema.js"
import { resolvers } from "./resolvers.js";

export default async function startServer() {

  const server = new ApolloServer({ typeDefs, resolvers })

  // @ts-ignore
  const { url } = await startStandaloneServer(server, {listen: {port: 4000}})

  console.log(`🚀  Server ready at: ${url}`)
}
