const express = require('express');
const UserControl = require('../controllers/user');

const router = express.Router();


router.route('/login')
    .post(UserControl.login);
router.use(UserControl.authenticate);

router.route('/logout')
    .post(UserControl.logout);
router.route('/register')
    .post(UserControl.register);
router.route('/:UserId')
    .put(userControl.updateUser)
    .delete(UserControl.deleteUser);

module.exports = router;



