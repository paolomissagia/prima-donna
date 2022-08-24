const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

const operasRoute = require("./routes/operas");
app.use("/api", operasRoute);

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to the Database");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
