const express = require("express");
const router = express.Router();
const verify = require("../middleware/verifyToken");

const {
    getAllSong,
    storeSong,
    getSongById,
    updateSong,
    destroySong,
} = require("../controller/song-controller");

// get all Song, Request method: GET
router.get("/songs", verify, getAllSong);

// Create a Song, Request method: GET
router.post("/songs", verify, storeSong);

// get a single Song, Request method: GET
router.get("/songs", verify, getSongById);

// Update a Song, Request method: PATCH
router.patch("/songs/:id", verify, updateSong);

// Delete a Song, Request method: DELETE
router.delete("/songs/:id", verify, destroySong);

module.exports = router;
