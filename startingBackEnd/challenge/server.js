const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

server.set("view engine", "njk");

server.get("/", function (req, res) {
  return res.render("aboutChallenge");
});

server.get("/classes", function (req, res) {
  return res.render("classes");
});

server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen(3333, function () {
  console.log("Teste server");
});
