const upload = require('../controllers/uploadAndReadFileXls');
const router = require('express').Router();

router.post('/', upload.uplaodAndRead);
router.get('/', upload.getAllDataBank);

module.exports = router;