function speechRoute(lang) {
  const speech = require("node-gtts")(lang);  
  const router = require("express").Router();

  router.get("/", function (req, res) {
    res.set({ "Content-Type": "audio/mpeg" });
    speech.stream(req.query.text).pipe(res);
  });

  return router;
}

module.exports = speechRoute;
