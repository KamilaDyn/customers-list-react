require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes/api/customers');
const cors = require('cors');
const bodyParser = require('body-parser');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConn');
const {logEvents} = require('./middleware/logger');

const PORT = process.env.PORT || 3500;

const app = express();

app.use(express.json());
app.use(Router);
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//connect db
connectDB();

const itemsRouter = require('./routes/api/customers');

// API routes

app.use('/api/customers', itemsRouter);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// // Start the server
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log'
  );
});
