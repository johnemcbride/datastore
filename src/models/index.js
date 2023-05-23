// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, Note, Enrolment, InstrumentBand } = initSchema(schema);

export {
  Task,
  Note,
  Enrolment,
  InstrumentBand
};