const express = require("express");
const pino = require("pino-http")({
  serializers: {
    req(req) {
      return req.raw.body;
    },
  },
});

const app = express();
app.use(express.json());
app.use(pino);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/", function (request, response) {
  try {
    const { body } = request;
    response.json(body);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000);
