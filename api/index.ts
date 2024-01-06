import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema";
import { createContext } from "./context";

const start = async () => {
  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3004 },
    context: createContext,
  });

  console.log(`Server started at ${url}`);
};

start();
