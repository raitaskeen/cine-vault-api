require('dotenv').config();


const express = require('express');
const connectDB = require('./config/db');

const moviesRouter = require('./routes/movies.routes');

connectDB();

const app = express();

app.use(express.json());

app.use('/movies', moviesRouter);

app.get('/', (req, res) => {
    res.send('Movies API Server is running...');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});