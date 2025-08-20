// src/db/initMongoConnection.js
import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  const uri = env('MONGO_URL');

  if (!uri) {
    throw new Error('MONGO_URL is not defined in .env file');
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ Mongo connection successfully established!');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};
