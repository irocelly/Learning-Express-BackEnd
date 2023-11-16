var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//list the routes
var loginRouter = require("./routes/login");

var app = express();

//initialize swagger
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Express API",
      version: "1.0.0",
      description: "A sample Express API",
    },
    servers: [
      {
        url: "http://192.168.0.8:3001",
      },
    ],
  },
  // Path ke file API Anda
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(swaggerOptions);
const swaggerUi = require("swagger-ui-express");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//API router
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs)); //Swagger API Documentation
app.use("/api/v1/login", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
