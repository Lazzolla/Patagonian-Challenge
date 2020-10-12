const express = require('express'),
    router = express.Router(),
    { tokenValidation } = require('../middlewares/spotify/tokenValidation'),
    { getSongsByName, getSongsById } = require('../controllers/songs.controllers')

// Get songs by artist name
router.get('/', tokenValidation, getSongsByName)

// Get songs by song Id
router.get('/:id', tokenValidation, getSongsById);

module.exports = router;
