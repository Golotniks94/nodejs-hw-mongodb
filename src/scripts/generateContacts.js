import { promises as fs } from 'fs';
import { join } from 'path';

const writeContacts = async (contacts) => {
  const filePath = join(__dirname, '../data/contacts.json');
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2), 'utf8');
};

const generateContacts = async (number) => {
  const contacts = Array.from({ length: number }, (_, i) => ({
    id: i + 1,
    name: `Contact ${i + 1}`,
    email: `contact${i + 1}@example.com`,
  }));

  await writeContacts(contacts);
};

generateContacts(5);
