import { makeSchema } from 'nexus';
import path, { join } from 'path';
import * as schemaTypes from './graphql';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const schema = makeSchema({
  types: schemaTypes,
  outputs: {
    typegen: join(__dirname, "nexus-typegen.ts"),

    schema: join(__dirname, "schema.graphql"),
  },
  contextType: {
    module: join(__dirname, "context.ts"),
    export: "Context",
  },
  features: {
    abstractTypeStrategies: {
      resolveType: false
    }
  }
})

