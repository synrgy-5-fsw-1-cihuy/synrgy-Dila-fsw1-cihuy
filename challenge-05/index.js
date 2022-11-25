const express = require("express");
const formidableMiddleware = require("express-formidable");
const {PORT = 8002} = process.env;

const app = express();
const carsRouter = require("./router/cars.router");


app.use(formidableMiddleware());

app.use("/api/cars", carsRouter);

app.listen(PORT)