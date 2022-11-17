const manipController = require('../controllers/manipController');
const router = require('express').Router();
const auth = require('../auth/auth');

router.post("/", manipController.addManip);
router.get('/', manipController.getAllManip);
router.get('/:id', auth, manipController.getOneManip);
router.put("/:id", auth, manipController.updateManip);
router.delete('/:id', auth, manipController.deleteManip);

module.exports = router;