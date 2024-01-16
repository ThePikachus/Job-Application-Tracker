const db = require('../models/peopleModels.js');

const peopleController = {};

peopleController.getResidents = (req, res, next) => {
  const queryString = "SELECT r.* from residents r"
  db.query(queryString)
    .then(data => {
      res.locals.residents = data;
      return next();
    })
    .catch(err => {return next(err);});
}

peopleController.getOneResident = (req, res, next) => {
  const queryString = "SELECT r.* from residents r WHERE name = $1"
  db.query(queryString, [req.params.name])
    .then(data => {
      res.locals.oneResident = data;
      return next();
    })
    .catch(err => {return next(err);});
}

peopleController.getInstructors = (req, res, next) => {
  const queryString = "SELECT i.* from instructors i"
  db.query(queryString)
    .then(data => {
      res.locals.instructors = data;
      return next();
    })
    .catch(err => {return next(err);});
}

peopleController.getOneInstructor = (req, res, next) => {
  const queryString = "SELECT i.* from instructors i WHERE name = $1"
  db.query(queryString, [req.params.name])
    .then(data => {
      res.locals.oneInstructor = data;
      return next();
    })
    .catch(err => {return next(err);});
}

module.exports = peopleController;