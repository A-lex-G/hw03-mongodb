// const contacts = require("../models/contacts");
const { Contact } = require("../models/contact");

const { HttpError, controllerWrapper } = require("../helpers");

const getAllContacts = async (req, res, next) => {
  const allContacts = await Contact.find();
  res.json(allContacts);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const requestedContact = await Contact.findById(contactId);

  if (!requestedContact) {
    throw HttpError(404, "Not found");
  }
  res.json(requestedContact);
};

const addNewContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContactById: controllerWrapper(getContactById),
  addNewContact: controllerWrapper(addNewContact),
  updateContactById: controllerWrapper(updateContactById),
  updateStatusContact: controllerWrapper(updateStatusContact),
  deleteContactById: controllerWrapper(deleteContactById),
};
