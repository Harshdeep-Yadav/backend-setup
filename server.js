import express from "express";
import dotenv from "dotenv";

// config
dotenv.config();

// rest api
const app = express();

// rest api's
app.get("/", (req, res) => {
    res.send("Welcome to jamecho");
});

// PORT
const PORT = process.env.PORT || 8080;

//listening

app.listen(PORT, (req, res) => {
    console.log(
        `Server running on ${process.env.DEV_MODE} mode at port ${PORT} 😎`
    );
});
