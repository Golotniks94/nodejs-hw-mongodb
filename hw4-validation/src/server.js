// src/server.js
import express from 'express';
import cors from 'cors';
import contactsRouter from './routers/contacts.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(contactsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
