import { getContacts } from '../lib/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const contacts = await getContacts();
  await writeContacts([]);
  return contacts;
};

removeAllContacts();
