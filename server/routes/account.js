const express = require('express');
const accountControl = require('../controllers/account');

const router = express.Router();

router.route('/')
    .post(accountControl.createAccount);
router.route('/:account_id')
    .put(accountControl.updateAccount)
    .delete(accountControl.deleteAccount);

module.exports = router;

