import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema";
import { createContext } from "./context";
import { authMiddleware } from './auth';
import { applyMiddleware } from 'graphql-middleware';

const schemaWithMiddleware = applyMiddleware(schema, authMiddleware);

const start = async () => {
  const server = new ApolloServer({ schema: schemaWithMiddleware });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3004 },
    context: createContext,
  });

  console.log(`Server started at ${url}`);
};

start();
