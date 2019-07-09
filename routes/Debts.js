const router = require('express').Router();
const DebtsControl = require('../controllers/Bills');

router.route('/')
    .post(DebtsControl.createDebts);
router.route('/:Debts_id')
    .put(DebtsControl.updateDebts)
    .delete(DebtsControl.deleteDebts);

module.exports = router;
