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
    res.status(200).json({ message: "You've reached Nicolas's W7 project server"});
});

app.get("/number", async (req, res) => {
    // res.json({message: "You have asked for a number"});
    try {
        // if you forget the extra ()'s it will break.
        const numbers = (await db.query(`select * from test
            ORDER BY id`)).rows;
        res.json(numbers);
    } catch {
        res.send(`There was an error`);
    }
});

const PORT=8080
app.listen(PORT, () => {
    console.log(`Server is available at: http://localhost:${PORT}`);
});
