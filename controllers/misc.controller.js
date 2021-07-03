const axios = require("axios");

const http = axios.create({
  baseURL: "http://localhost:8000",
});

module.exports.home = (req, res, next) => {
  http
    .get("/peoples/?_limit=8")
    .then((response) => {
      res.render("home", { peoples: response.data });
    })
    .catch((err) => {
      console.error(err);
    });
};
