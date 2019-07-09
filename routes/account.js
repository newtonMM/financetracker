const router = require('express').Router();
const AccountControl = require('../controllers/account');

router.route('/')
    .post(AccountControl.createAccount);
router.route('/:account_id')
    .put(AccountControl.updateAccount)
    .delete(AccountControl.deleteAccount)
    .get(AccountControl.getAccountbalance);

module.exports = router;

