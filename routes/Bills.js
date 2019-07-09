const router = require('express').Router();
const BillsControl = require('../controllers/Bills');

router.route('/')
    .post(BillsControl.createBills);
router.route('/:Bills_id')
    .put(BillsControl.updateBills)
    .delete(BillsControl.deleteBills);

module.exports = router;
