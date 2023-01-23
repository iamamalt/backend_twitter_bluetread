const express = require("express");
const app = express();
const Twit = require("twit");

const T = new Twit({
  consumer_key: "Create a .env file",
  consumer_secret: "Create a .env file",
  access_token: "Create a .env file",
  access_token_secret: "Create a .env file",
});

app.get("/tweets", (req, res) => {
  T.get("search/tweets", { query: "#react #cloud", count: 20 }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
