const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/naveen")
  .then(() => {
    console.log("mongodb connected");
  })

  .catch(() => {
    console.log("not connected");
  });
const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Coll", LogInSchema);
module.exports = collection;
