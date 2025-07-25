import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import {
  getContactsController,
  getContactByIdController,
} from './controllers/contacts.js';

import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(pino({ transport: { target: 'pino-pretty' } }));

  app.get('/contacts', getContactsController);
  app.get('/contacts/:contactId', getContactByIdController);

  app.use(notFoundHandler);
  app.use(errorHandler);

  const PORT = env('PORT');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
export default setupServer;

// fix
