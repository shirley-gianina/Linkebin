const axios = require("axios");
const { response } = require("express");

const http = axios.create({
  baseURL: "http://localhost:8000",
});

module.exports.list = (req, res, next) => {
  http
    .get("/peoples")
    .then((response) => {
      res.render("peoples-list", { peoples: response.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports.create = (req, res, next) => {
  res.render("peoples-create");
};

module.exports.edit = (req, res, next) => {
  const id = req.params.id;
  http.get(`/peoples/${id}`).then((response) => {
    res.render("peoples-edit", { people: response.data });
  });
};

module.exports.detail = (req, res, next) => {
  const id = req.params.id;
  http.get(`/peoples/${id}`).then((response) => {
    res.render("peoples-detail", { people: response.data });
  });
};

module.exports.delete = (req, res, next) => {
  res.render("people-new");
};
