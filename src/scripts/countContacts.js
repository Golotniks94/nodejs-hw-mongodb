import { getContacts } from '../lib/contacts.js';

export const countContacts = async () => {
  const contacts = await getContacts();
  return contacts.length;
};

console.log(await countContacts());
