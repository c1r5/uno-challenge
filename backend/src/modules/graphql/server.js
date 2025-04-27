import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import typeDefs from "./schema.js"

/**
 * @param {Resolver} resolvers
 */
export default async function startServer(resolvers) {

  const server = new ApolloServer({ typeDefs, resolvers })

  // @ts-ignore
  const { url } = await startStandaloneServer(server, {listen: {port: 4000}})

  console.log(`🚀  Server ready at: ${url}`)
}
