const express = require("express");
const ctrl = require("../../controlers/contacts");
const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schema.addSchema), ctrl.addNewContact);

router.delete("/:contactId", ctrl.deleteContactById);

router.put(
  "/:contactId",
  validateBody(schema.addSchema),
  ctrl.updateContactById
);

module.exports = router;