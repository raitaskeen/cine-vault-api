const mongoose = require("mongoose");
const Movie = require('../models/movie.model');

exports.createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json({ success: true, data: movie });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ success: true, count: movies.length, data: movies });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server Error" });
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Invalid Movie ID"
            });
        }

        const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { 
        new: true,
        runValidators: true
        });

    if (!updatedMovie) {
        return res.status(404).json({ 
            success: false, 
            error: "Movie not found" });
        }
    res.status(200).json({ 
        success: true, 
        data: updatedMovie 
    });
} catch (error) {
    if (error.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }

    return res.status(500).json({
        success: false,
        error: "Server Error"
    });
}
};

exports.deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Invalid Movie ID"
            });
    }

    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
        return res.status(404).json({
            success: false,
            error: "Movie not found"
        });
    }
    res.status(200).json({
        success: true,
        data: {}
    });
} catch (error) {
    return res.status(500).json({
        success: false,
        error: "Server Error"
    });
}
};