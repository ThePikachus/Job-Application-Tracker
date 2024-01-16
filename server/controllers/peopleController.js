const db = require('../models/peopleModels.js');

const peopleController = {};

peopleController.getResidents = (req, res, next) => {
  const queryString = "SELECT r.* from residents r";
  db.query(queryString)
    .then(data => {
      res.locals.residents = data.rows;
      return next();
    })
    .catch(err => {return next(err);});
}

peopleController.getOneResident = (req, res, next) => {
  const queryString = "SELECT r.* from residents r WHERE name = $1";
  const name = req.params.name
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  db.query(queryString, [name])
    .then(data => {
      console.log(name);
      console.log(data);
      res.locals.oneResident = data.rows;
      return next();
    })
    .catch(err => {return next(err);});
}

peopleController.getInstructors = (req, res, next) => {
  const queryString = "SELECT i.* from instructors i";
  db.query(queryString)
    .then(data => {
      res.locals.instructors = data.rows;
      return next();
    })
    .catch(err => {return next(err);});
}

peopleController.getOneInstructor = (req, res, next) => {
  const queryString = "SELECT i.* from instructors i WHERE name = $1";
  const name = req.params.name
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  db.query(queryString, [name])
    .then(data => {
      res.locals.oneInstructor = data.rows;
      return next();
    })
    .catch(err => {return next(err);});
}

module.exports = peopleController;