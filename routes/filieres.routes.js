const filiereController = require('../controllers/filiereController');
const router = require('express').Router();
const auth = require('../auth/auth');

router.post("/", filiereController.addFiliere);
router.get('/', filiereController.getAllFilieres);
router.get('/:id', auth, filiereController.getOneFiliere);
router.put("/:id", auth, filiereController.updateFiliere);
router.delete('/:id', auth, filiereController.deleteFiliere);

module.exports = router;