const db = require("../models/peopleModels.js");

const peopleController = {};

peopleController.getResidents = (req, res, next) => {
  const queryString = "SELECT name, image, phrase, pronouns, background_color FROM residents;";
  db.query(queryString)
    .then((data) => {
      res.locals.residents = data.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

peopleController.getOneResident = (req, res, next) => {
  const queryString = "SELECT * from residents  WHERE name = $1";
  const name = req.params.name
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  db.query(queryString, [name])
    .then((data) => {
      console.log(name);
      console.log(data);
      res.locals.oneResident = data.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

peopleController.getInstructors = (req, res, next) => {
  const queryString = "SELECT name, image, phrase, pronouns, background_color from instructors";
  db.query(queryString)
    .then((data) => {
      res.locals.instructors = data.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

peopleController.getOneInstructor = (req, res, next) => {
  const queryString = "SELECT * from instructors  WHERE name = $1";
  const name = req.params.name
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  db.query(queryString, [name])
    .then((data) => {
      res.locals.oneInstructor = data.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

peopleController.addPost = (req, res, next) => {
  const { post, name } = req.body;
  const queryString = `UPDATE residents
  SET comments = array_append(comments, '${post}')
  WHERE name = '${name}';`;
  db.query(queryString).then((data) => {
    res.locals.post = post;
    return next();
  });
};

module.exports = peopleController;
