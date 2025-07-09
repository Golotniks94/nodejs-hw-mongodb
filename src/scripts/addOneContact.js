import { getContactId } from '../utils/getContactId.js';
import { addContact } from '../utils/addContact.js';

export const addOneContact = async () => {
  const id = await getContactId();
  const newContact = {
    id,
    name: `Contact ${id}`,
    email: `contact${id}@example.com`,
  };
  await addContact(newContact);
};

addOneContact();
