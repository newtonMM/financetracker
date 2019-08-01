const express = require('express');
const router = express.Router();
const expensesControl = require('../controllers/expenses');

router.route('/')
    .post(expensesControl.createExpenses);
router.route('/:expenses_id')
    .put(expensesControl.updateExpenses)
    .delete(expensesControl.deleteExpenses);

module.exports = router;
