import { createInMemoryCache, useResponseCache } from "@graphql-yoga/plugin-response-cache";
import { type YogaServerOptions, createYoga } from "graphql-yoga";

import { createContext, schema } from "../data/schema";
import type { Context } from "../data/schema";

const cache = createInMemoryCache()

export const yogaOptions: YogaServerOptions<Context, Context> = {
  graphqlEndpoint: '/api/graphql',
  schema,
  context: () => createContext(),
  plugins: [
    useResponseCache({
      // global cache
      session: () => null,
      invalidateViaMutation: false,
      // by default cache all operations for 60 seconds
      ttl: 60_000,
      cache
    })
  ]
};

export default createYoga(yogaOptions)
