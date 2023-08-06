require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const customersRouter = require("./routes/api/customers");
const config = require("./config/config");

const app = express();
app.use(cors());
app.use(express.static("build"));

app.use(express.json());
app.use("/api/customers", customersRouter);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("error connecting to MongoDB:", error.message);
  });

module.exports = app;
