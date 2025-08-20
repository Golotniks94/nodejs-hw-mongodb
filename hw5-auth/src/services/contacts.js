import { Contact } from '../db/models/contact.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = '_id',
  sortOrder = 'asc',
  filter = {},
}) => {
  const limit = parseInt(perPage, 10);
  const skip = (parseInt(page, 10) - 1) * limit;

  const sortDirection = sortOrder === 'desc' ? -1 : 1;

  let query = Contact.find();

  if (filter.type) {
    query = query.where('contactType').equals(filter.type);
  }
  if (filter.isFavourite !== undefined) {
    query = query.where('isFavourite').equals(filter.isFavourite);
  }

  const totalItems = await Contact.countDocuments(query.getFilter());

  const contacts = await query
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortDirection });

  const totalPages = Math.ceil(totalItems / limit);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  return {
    data: contacts,
    page: parseInt(page, 10),
    perPage: limit,
    totalItems,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };
};

export const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await Contact.create(payload);
  return contact;
};

export const patchContact = async (contactId, payload) => {
  const result = await Contact.findOneAndUpdate({ _id: contactId }, payload, {
    new: true,
  });
  return result;
};

export const deleteContact = async (contactId) => {
  const contact = await Contact.findByIdAndDelete(contactId);
  return contact;
};
