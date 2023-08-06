const mongoose = require("mongoose");
const config = require("./config/config");
const logEvents = require("./middleware/logger");

mongoose.connection.on("error", (err) => {
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
const app = require("./app");

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
