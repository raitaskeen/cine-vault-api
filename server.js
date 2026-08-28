require("dotenv").config();

const cors = require("cors");

const express = require("express");
const connectDB = require("./config/db");

const moviesRouter = require("./routes/movies.routes");
const authRouter = require("./routes/auth.routes");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/movies", moviesRouter);

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Movies API Server is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
