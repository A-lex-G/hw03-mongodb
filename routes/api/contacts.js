const express = require("express");
const ctrl = require("../../controllers/contacts");
const {
  validateBody,
  isValidId,
  validateFavoriteField,
} = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addNewContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavoriteField(schemas.switchFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:contactId", isValidId, ctrl.deleteContactById);

module.exports = router;
