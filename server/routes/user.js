const express = require('express');
const userControl = require('../controllers/user');
const router = express.Router();

router.route('/login').post(userControl.login);
router.route('/logout').post(userControl.logout);
router.route('/register').post(userControl.register);
router.use(userControl.authenticate);

router
  .route('/:userId')
  .put(userControl.updateUser)
  .delete(userControl.deleteUser);

module.exports = router;
