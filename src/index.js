var express = require("express");
const cors = require("cors");
const speechRoute = require("./routes/speech");
const accessMiddleware = require("./middlewares/assess");
const CORS = require("./constants/cors");
const CONFIG = require("./constants/config");
var router = express.Router();

const app = express();

app.use(cors(CORS));

app.listen(CONFIG.PORT, () => {
  app.use("/", router);

  console.log(`gtts is running on port: ${CONFIG.PORT}`);
});

app.use("/", accessMiddleware);
app.use("/en", speechRoute("en"));
app.use("/ru", speechRoute("ru"));
