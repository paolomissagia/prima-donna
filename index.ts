const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const operasRoute = require("./routes/operas");
app.use("/api", operasRoute);

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to the Database");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
