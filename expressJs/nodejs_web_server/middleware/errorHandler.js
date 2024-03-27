const { logEvents } = require("./logEvents");

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name} ${err.message}`, "reqLog.txt");
  console.log(err.stack);
  res.status(500).send(err.message);
};

module.exports = errorHandler;
