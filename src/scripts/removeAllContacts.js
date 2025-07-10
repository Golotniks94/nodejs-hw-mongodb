import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts successfully removed.');
    console.log(
      'NOTE: Due to OS issue, you need to manually empty src/db/db.json.',
    );
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

removeAllContacts();
