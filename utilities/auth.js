const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const secret = process.env.SECRET || "ohsnapple";
  jwt.verify(req.headers.authorization, secret, (err, decodedToken) => {
    if (err) {
      res.status(400).json({ message: "Invalid Token!" });
    } else {
      next();
    }
  });
};
