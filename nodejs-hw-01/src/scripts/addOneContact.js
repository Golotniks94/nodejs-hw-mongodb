import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...currentContacts, newContact];

    await writeContacts(updatedContacts);

    console.log('Successfully added one contact.');
    console.log(
      'NOTE: Due to OS issue, you need to manually update db.json with the content below.',
    );
    console.log(
      'Please copy this new contact and paste it into src/db/db.json array:',
    );
    console.log(JSON.stringify(newContact, null, 2));
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
