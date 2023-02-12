import { createYoga } from "graphql-yoga"
import express from "express";
import path from "path";
import cors from "cors";

import { schema } from "./data/schema";

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  batching: true,
  logging: false
})

const app = express();

app.use(express.json());
app.use(express.static(path.join('.', 'public')));

app.use('/api/graphql', cors(), yoga);

export default app;
