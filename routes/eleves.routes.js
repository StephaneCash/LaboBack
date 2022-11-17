const eleveController = require('../controllers/eleveController');
const router = require('express').Router();
const auth = require('../auth/auth');


router.post("/", eleveController.addEleve);
router.get('/', eleveController.getAllEleves);
router.get('/:id', auth, eleveController.getOneEleve);
router.put("/:id", auth, eleveController.updateEleve);
router.delete('/:id', auth, eleveController.deleteEleve);

module.exports = router;