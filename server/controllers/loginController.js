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

loginController.changePass = async (req, res, next) => {
  console.log("this is body", req.body);
  const { name, oldPass, newPass } = req.body;
  const checkPass = `SELECT r.* from residents r WHERE name = '${name}'`;
  const changePass = `UPDATE residents
  SET password = '${newPass}'
  WHERE name = '${name}';`;
  const data = await db
    .query(checkPass)
    .then((data) => {
      data = data.rows[0];
      return data;
    })
    .catch((err) => {
      return next(err);
    });
  console.log("this is data", data);
  if (data.password === oldPass) {
    const result = await db
      .query(changePass)
      .then((result) => {
        result = result.rows[0];
        return result;
      })
      .catch((err) => {
        return next(err);
      });
  }
  return next();
};

module.exports = loginController;
