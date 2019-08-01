const express = require('express');
const billsControl = require('../controllers/Bills');
const router = express.Router();
router.route('/')
    .post(billsControl.createBills);
router.route('/:bills_id')
    .put(billsControl.updateBills)
    .delete(billsControl.deleteBills);

module.exports = router;
