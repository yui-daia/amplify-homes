// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Test1, Home } = initSchema(schema);

export {
  Test1,
  Home
};