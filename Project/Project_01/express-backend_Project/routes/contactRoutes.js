const express = require("express");
const router = express.Router();
const {getContact,getIdContact,createContact,updateContact,deleteContact} = require("../controller/contact_controller");

router.route('/').get(getContact).post(createContact);

router.route('/:id').get(getIdContact).put(updateContact).delete(deleteContact);

module.exports = router; 