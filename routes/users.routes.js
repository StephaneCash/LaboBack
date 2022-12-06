const userController = require('../controllers/userController');
const router = require('express').Router();
const auth = require('../auth/auth');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);

router.post("/", userController.addUser);
router.put("/:id", auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;