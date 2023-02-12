import type { VercelRequest, VercelResponse } from '@vercel/node';

import { createYoga } from "graphql-yoga";

import { schema } from "../data/schema";

export default createYoga<{
    req: VercelRequest, res: VercelResponse
}>({
    graphqlEndpoint: '/api/graphql',
    schema
})
