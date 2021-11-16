const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/users', controller.users.getAllUsers);
// router.get('/users/:username', controller.users.getOneUser)
router.get('/users/:userID', controller.users.getUserById)


module.exports = router;