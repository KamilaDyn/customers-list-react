const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const customers = require("./routes/api/customers");
require("dotenv").config();
console.log(process.env);

const app = express();
const path = require("path");
var cors = require("cors");

app.use(cors());

app.options("*", cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./config/keys").mongoURI;
//conect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(error => console.log(error));

app.use("/api/customers", customers);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at port ${port}`));
