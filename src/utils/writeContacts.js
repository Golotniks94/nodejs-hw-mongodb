import { writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { mkdir } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const dir = dirname(PATH_DB);
    await mkdir(dir, { recursive: true });
    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};
