import { createYoga } from "graphql-yoga"
import express from "express";
import path from "path";
import cors from "cors";

import { yogaOptions } from "./api/graphql";

const yoga = createYoga(yogaOptions)

const app = express();

app.use(express.json());
app.use(express.static(path.join('.', 'public')));

app.use('/api/graphql', cors(), yoga);

export default app;
