import startServer from "./modules/graphql/server.js"

async function bootstrap() {
  await startServer()
}

bootstrap()