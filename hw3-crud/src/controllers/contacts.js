import createHttpError from 'http-errors';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
} from '../services/contacts.js';
import mongoose from 'mongoose';

export const getContactsController = ctrlWrapper(async (req, res) => {
  const contacts = await getAllContacts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
});

export const getContactByIdController = ctrlWrapper(async (req, res, next) => {
  const { contactId } = req.params;
  if (!mongoose.isValidObjectId(contactId)) {
    throw createHttpError(400, 'Invalid contact ID');
  }
  const contact = await getContactById(contactId);
  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
});

export const createContactController = ctrlWrapper(async (req, res) => {
  const contact = await createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
});

export const patchContactController = ctrlWrapper(async (req, res, next) => {
  const { contactId } = req.params;
  if (!mongoose.isValidObjectId(contactId)) {
    throw createHttpError(400, 'Invalid contact ID');
  }
  const contact = await updateContact(contactId, req.body);
  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: contact,
  });
});

export const deleteContactController = ctrlWrapper((req, res) =>
  res.status(501).json({ message: 'deleteContactController Not Implemented' }),
);
