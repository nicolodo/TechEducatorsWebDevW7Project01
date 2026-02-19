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

app.listen(PORT, function () {
    console.log(`Server is available at: http://localhost:8080`);
});

app.get("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});