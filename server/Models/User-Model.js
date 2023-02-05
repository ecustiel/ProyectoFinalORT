const { Schema, model } = require("mongoose");

const userSchema = Schema({
  _id: {
    type: Object,
    require: false,
  },

  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  celNumber: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = model("User", userSchema);
