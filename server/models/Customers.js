const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  second_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_phone: {
    type: Number,
    required: true,
  },
  work_phone: {
    type: Number,
    required: false,
  },
  shipping_street: {
    type: String,
    required: true,
  },
  shipping_number: {
    type: String,
    required: true,
  },
  shipping_zipcode: {
    type: String,
    required: true,
  },
  shipping_city: {
    type: String,
    required: true,
  },
  shipping_state: {
    type: String,
    required: true,
  },
  shipping_country: {
    type: String,
    required: true,
  },
  billing_street: {
    type: String,
    required: true,
  },
  billing_number: {
    type: String,
    required: true,
  },
  billing_zipcode: {
    type: String,
    required: true,
  },
  billing_city: {
    type: String,
    required: true,
  },
  billing_state: {
    type: String,
    required: true,
  },
  billing_country: {
    type: String,
    required: true,
  },
});

module.exports = Customer = mongoose.model("items", CustomerSchema);
