import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts); // Display all contacts in the console
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
  }
};

getAllContacts();
