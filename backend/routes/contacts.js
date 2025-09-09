const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');

// Public routes
router.post('/', ContactController.submitContact);

// Admin routes (now public)
router.get('/', ContactController.getAllContacts);
router.get('/stats', ContactController.getContactStats);
router.get('/:id', ContactController.getContactById);
router.put('/:id/status', ContactController.updateContactStatus);
router.delete('/:id', ContactController.deleteContact);

module.exports = router;
