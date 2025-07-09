import path from 'node:path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export const PATH_DB = path.resolve(__dirname, '../db/db.json');
