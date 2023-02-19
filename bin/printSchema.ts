#!/usr/bin/env node_modules/.bin/tsx

import { printSchema } from "graphql";

import { schema } from "../data/schema";

console.log(printSchema(schema));
