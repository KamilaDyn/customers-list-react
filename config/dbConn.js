const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_NAME}:${process.env.DB_KEY}@contacts.770un.mongodb.net/?retryWrites=true&w=majority`
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
