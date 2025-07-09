import { getContacts } from '../lib/contacts.js';

export const getAllContacts = async () => {
  return await getContacts();
};

console.log(await getAllContacts());
