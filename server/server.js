// communication codeReactDatabase Driven Full Stack React & Express App
// // imports
import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

// config
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
});

app.get('/', (req, res) => {
    res.status(200).json({ message: "You've reached the server"});
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000...");
});