// src/index.js
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
import { env } from './utils/env.js';

async function bootstrap() {
  try {
    await initMongoConnection();
    const port = env('PORT') || 3000;
    setupServer().listen(port, () => {
      console.log(`🚀 Server started on port ${port}`);
    });
  } catch (error) {
    console.error('❌ Application startup error:', error.message);
    process.exit(1);
  }
}

bootstrap();
