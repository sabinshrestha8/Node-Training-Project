// const mongoose = require('mongoose');
// const Song = mongoose.model('Song');

const Song = require("../model/song");
const Category = require("../model/category");

const getAllSong = async (req, res) => {
    try {
        const songs = await Song.find();
        if (songs.length == 0) {
            return res.status(204).send();
        }
        res.json(songs);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const storeSong = async (req, res) => {
    const song = new Song({ ...req.body, creatorId: req.user._id });
    try {
        if (req.body.categoryName) {
            if (
                !(await Category.findOne({
                    categoryName: req.body.categoryName,
                }))
            ) {
                return res.status(404).send("category name doesn't exists");
            }
        } else {
            return res.status(400).send("Invalid Category Name");
        }
        await song.save();
        res.status(201).json(req.body);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        res.json(song);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateSong = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) {
            res.status(404).json({ error: "Data not found" });
            return;
        }
        song.name = req.body.name;
        song.category = req.body.category;
        song.artist = req.body.artist;

        await song.save();
        res.status(200).json(song);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const destroySong = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) {
            return res.status(404).json({ error: "Data not found" });
        }
        await song.remove();
        return res.status(204).json({});
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    getAllSong,
    storeSong,
    getSongById,
    updateSong,
    destroySong,
};
