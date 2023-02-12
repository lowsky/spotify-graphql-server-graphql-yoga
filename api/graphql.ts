import type { VercelRequest, VercelResponse } from '@vercel/node';

import { createInMemoryCache, useResponseCache } from "@graphql-yoga/plugin-response-cache";
import { createYoga } from "graphql-yoga";

import { schema } from "../data/schema";

const cache = createInMemoryCache()

export const yogaOptions = {
    graphqlEndpoint: '/api/graphql',
    schema,
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

export default createYoga<{
    req: VercelRequest, res: VercelResponse
}>(yogaOptions)
