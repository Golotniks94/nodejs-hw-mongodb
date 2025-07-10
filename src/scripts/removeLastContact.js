import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return null;
    }
    const lastContact = contacts.pop();

    await writeContacts(contacts);

    console.log('Successfully removed last contact.');
    console.log(
      'NOTE: Due to OS issue, you need to manually remove the last contact from src/db/db.json.',
    );
    console.log(
      'The removed contact was:',
      JSON.stringify(lastContact, null, 2),
    );
    return lastContact;
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
