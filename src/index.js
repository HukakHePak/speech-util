var express = require("express");
const cors = require("cors");
const speechRoute = require("./speechRoute");
var router = express.Router();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 5005;

app.listen(port, () => {
  app.use("/", router);

  console.log(`gtts is running on port: ${port}`);
});

app.use("/en", speechRoute("en"));
app.use("/ru", speechRoute("ru"));
