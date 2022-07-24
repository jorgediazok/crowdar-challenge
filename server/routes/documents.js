const express = require('express');
const router = express.Router();

const DocumentController = require('../controllers/documentController');
const auth = require('../middlewares/auth');

router.get('/', auth, DocumentController.getDocuments);
router.get('/:id', auth, DocumentController.getDocument);

router.post('/', auth, DocumentController.createDocument);
router.put('/:id', auth, DocumentController.updateDocument);
router.delete('/:id', auth, DocumentController.deleteDocument);

module.exports = router;
