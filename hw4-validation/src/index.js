// src/index.js
import { setupServer } from './server.js';
import { env } from './utils/env.js';
import { initMongoConnection } from './db/initMongoConnection.js';

async function bootstrap() {
  try {
    await initMongoConnection();

    const app = setupServer();
    const PORT = Number(env('PORT')) || 3000;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Startup error:', err.message);
    process.exit(1);
  }
}

bootstrap();
