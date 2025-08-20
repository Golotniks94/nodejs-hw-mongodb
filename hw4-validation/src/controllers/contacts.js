import {
  getAllContacts,
  getContactById,
  createContact,
  patchContact,
  deleteContact,
} from '../services/contacts.js';
import createHttpError from 'http-errors';

const catchAsync = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export const getAllContactsController = catchAsync(async (req, res) => {
  const { page, perPage, sortBy, sortOrder, type, isFavourite } = req.query;

  const filter = {};
  if (type) filter.type = type;
  if (isFavourite !== undefined) filter.isFavourite = isFavourite === 'true';

  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.status(200).json({
    status: 200,
    message: 'Contacts retrieved successfully',
    data: contacts,
  });
});

export const getContactByIdController = catchAsync(async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Contact retrieved successfully',
    data: contact,
  });
});

export const createContactController = catchAsync(async (req, res) => {
  const contact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Contact created successfully',
    data: contact,
  });
});

export const patchContactController = catchAsync(async (req, res) => {
  const { contactId } = req.params;
  const result = await patchContact(contactId, req.body);

  if (!result) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Contact updated successfully',
    data: result,
  });
});

export const deleteContactController = catchAsync(async (req, res) => {
  const { contactId } = req.params;
  const contact = await deleteContact(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Contact deleted successfully',
    data: contact,
  });
});
