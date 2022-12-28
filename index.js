const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middlewire

app.use(cors());
app.use(express.json());







app.get("/", (req, res) => {
    res.send("TellUs Server is running...");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
