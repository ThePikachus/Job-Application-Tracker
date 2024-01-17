const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;
const residentsRouter = require("./routers/residentsRouter.js");
const instructorsRouter = require("./routers/instructorsRouter.js");
const loginRouter = require("./routers/loginRouter.js");

//Parse JSON incoming
app.use(express.json());

//Accept requests from any domain - to be updated
app.use(cors({ origin: "*" }));

//serve static files and the index.html file
app.use("/", express.static(path.join(__dirname, "../dist")));

app.use("/residents", residentsRouter);
app.use("/instructors", instructorsRouter);
app.use("/login", loginRouter);
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

//serve 404 error to all other unknown routes
app.use("*", (req, res) => res.status(404).send("Page not found"));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught an unknown middlware error, uh-oh!",
    status: 500,
    message: { err: "An error occured" },
  };
  //use default err mashed with changes from passed in err
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

//listen for port
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
