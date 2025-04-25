import startServer from "./modules/graphql/server"

async function bootstrap() {
  await startServer()
}

bootstrap()