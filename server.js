const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/api/customers");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(Router);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const itemsRouter = require("./routes/api/customers");

mongoose
  .connect(
    "mongodb+srv://kamila:nsKtx4bZLRW03YWB@contacts.770un.mongodb.net/?retryWrites=true&w=majority" ||
      "mongodb://127.0.0.1:27017",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.log(error));
// API routes

app.use("/api/customers", itemsRouter);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// // Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
