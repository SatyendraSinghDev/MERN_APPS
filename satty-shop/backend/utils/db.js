const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewURLParser: true,
    });
    console.log("Database Connected Successfully....");
  } catch (error) {
    console.log(error.message);
  }
};
