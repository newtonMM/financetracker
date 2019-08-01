const express = require('express');
const debtsControl = require('../controllers/Debts');
const router = express.Router();

router.route('/')
    .post(debtsControl.createDebts);
router.route('/:debts_id')
    .put(debtsControl.updateDebts)
    .delete(debtsControl.deleteDebts);

module.exports = router;
