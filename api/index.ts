import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema";
import { context } from "./context";

const server = new ApolloServer({ schema });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3004 },
  context: async () => {
    return { ...context };
  },
});

console.log(`Server started at ${url}`);
