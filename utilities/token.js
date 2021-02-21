const jwt = require("jsonwebtoken");

const newToken = (user) => {
  const payload = {
    userID: user.id,
    username: user.username,
  };
  const secret = process.env.SECRET || "ohsnapple";
  const options = {
    expiresIn: 60 * 60 * 1000,
  };
  return jwt.sign(payload, secret, options);
};

module.exports = newToken;
