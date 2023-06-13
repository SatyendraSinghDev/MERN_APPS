const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utils/response");

class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password"); // findOne will return null if not found and if found then return that single object
      if (admin) {
      } else {
        responseReturn(res, 400, { error: "Email doesn't exists." });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  s;
}

// Create object of above class and export it
module.exports = new authControllers();
