const CONFIG = require("../constants/config");

const accessMiddleware = require("express").Router();

accessMiddleware.all("/*", (req, res, next) => {
  const token = req.header("authorization");

  if (token === CONFIG.TOKEN) {
    next();
  } else {
    res.status(403).send("Bad authorization token");
  }
});

module.exports = accessMiddleware;
