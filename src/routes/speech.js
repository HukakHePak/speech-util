const CACHE = require("../constants/cache");

function speechRoute(lang) {
  const speech = require("node-gtts")(lang);
  const router = require("express").Router();

  router.get("/", function (req, res) {
    res.set({ "Content-Type": "audio/mpeg" });

    if (CACHE.ENABLED) {
      res.set("Cache-control", `public, max-age=${CACHE.TIME}`);
    }

    speech.stream(req.query.text).pipe(res);
  });

  return router;
}

module.exports = speechRoute;
