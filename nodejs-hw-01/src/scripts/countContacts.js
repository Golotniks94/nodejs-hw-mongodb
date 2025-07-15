import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log(`There are ${count} contacts in db.json.`);
    return count;
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
};

countContacts();
