const express = require('express');
const usercontrol = require('../controllers/user');

const router = express.Router();


router.route('/login')
    .post(usercontrol.login);
router.use(Usercontrol.authenticate);

router.route('/logout')
    .post(usercontrol.logout);
router.route('/register')
    .post(usercontrol.register);
router.route('/:UserId')
    .put(usercontrol.updateUser)
    .delete(usercontrol.deleteUser);

module.exports = router;



