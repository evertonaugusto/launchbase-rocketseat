const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
});

server.get("/", function (req, res) {
  return res.render("contentChallenge");
});

server.get("/aboutChallenge", function (req, res) {
  return res.render("aboutChallenge");
});

server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen(3333, function () {
  console.log("Teste server");
});
