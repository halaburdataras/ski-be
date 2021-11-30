const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  let connection = null;

  const MONGO = config.get("mongoUri");

  try {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", true);

    await mongoose.connect(MONGO);
    connection = await mongoose.createConnection(MONGO);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(JSON.stringify({ key: "Mongodb", value: err.message }));
  }

  return connection;
};

module.exports = connectDB;
