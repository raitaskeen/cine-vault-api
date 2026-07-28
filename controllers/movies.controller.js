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

        const newData = req.body;

        const updatedMovie = await Movie.findByIdAndUpdate(id, newData, { 
        new: true,
        runValidators: true
        });
    if (!updatedMovie) {
        return res.status(404).json({ 
            success: false, error: "Movie not found" });
        }
    res.status(200).json({ 
        success: true, 
        data: updatedMovie 
    });
} catch (error) {
    res.status(400).json({
        success: false,
        error: error.message
    });
}
};