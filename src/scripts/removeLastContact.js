import { getContacts } from '../lib/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await getContacts();
  if (contacts.length === 0) {
    throw new Error('No contacts to remove');
  }
  const lastContact = contacts.pop();
  await writeContacts(contacts);
  return lastContact;
};

removeLastContact();
