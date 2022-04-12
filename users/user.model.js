const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: String,
  sureName: String,
  country: String,
  sity: String,
  birth: String,
  degree: String,
  login: String,
  password: String,
  passwordCop: String,
  role: {
    type: String,
    default: "user",
  },
});
const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
