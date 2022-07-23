const express = require('express');
const router = express.Router();

const DocumentController = require('../controllers/documentController');
const auth = require('../middlewares/auth');

router.get('/search', DocumentController.getDocumentBySearch);
router.get('/', DocumentController.getDocuments);
router.get('/:id', DocumentController.getDocument);

router.post('/', auth, DocumentController.createDocument);
router.put('/:id', auth, DocumentController.updateDocument);
router.delete('/:id', auth, DocumentController.deleteDocument);

module.exports = router;
