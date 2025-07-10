import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updatedContacts = [...currentContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Successfully generated and added ${number} contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
