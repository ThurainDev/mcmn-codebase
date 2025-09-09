const express = require('express');
const router = express.Router();
const SongController = require('../controllers/SongController');

// Public routes
router.get('/', SongController.getAllSongs);
router.get('/search', SongController.searchSongs);

// Create song
router.post('/', SongController.createSong);

// Parameter routes - after specific routes
router.get('/:id', SongController.getSongById);
router.put('/:id', SongController.updateSong);
router.delete('/:id', SongController.deleteSong);

// Update song status
router.put('/:id/status', SongController.updateSongStatus);

module.exports = router;
