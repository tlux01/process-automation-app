// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Customer, Step, Template } = initSchema(schema);

export {
  Customer,
  Step,
  Template
};