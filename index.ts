const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const operasRoute = require("./routes/operas");
app.use("/api", operasRoute);

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to the Database");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
