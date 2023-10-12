const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    user,
    {
      _id: user._id,
      name: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.ACCESS_TOKEN,
    {
      encoding: "30d",
    }
  );
};

module.exports = generateToken;
