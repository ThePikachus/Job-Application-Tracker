const db = require("../models/peopleModels.js");

const loginController = {};

loginController.login = (req, res, next) => {
  console.log("got here");
  console.log("this is body", req.body);
  const { user, password } = req.body;
  const queryString = `SELECT r.* from residents r WHERE name = '${user}'`;
  db.query(queryString)
    .then((data) => {
      data = data.rows[0];
      console.log(data);
      if (data.name === user && data.password === password) {
        res.locals.user = data;
        console.log(res.locals.user);
        return next();
      }
    })
    .catch((err) => {
      return next(err);
    });
};
loginController.editUser = (req, res, next) => {
  console.log("got here");
  console.log("this is body", req.body);
  const { bio, pronouns, color, name } = req.body;
  const queryString = `UPDATE residents
  SET phrase = '${bio}',
      pronouns = '${pronouns}',
      background_color = '${color}'
  WHERE name = '${name}';`;
  db.query(queryString)
    .then((data) => {
      data = data.rows[0];
      console.log(data);

      res.locals.user = data;
      console.log(res.locals.user);
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = loginController;
