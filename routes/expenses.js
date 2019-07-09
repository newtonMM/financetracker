const router = require('express').Router();
const ExpensesControl = require('../controllers/expenses');

router.route('/')
    .post(ExpensesControl.createExpenses);
router.route('/:Expenses_id')
    .put(ExpensesControl.updateExpenses)
    .delete(ExpensesControl.deleteExpenses);

module.exports = router;
