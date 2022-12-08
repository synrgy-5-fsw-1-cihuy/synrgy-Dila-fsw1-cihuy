const express = require("express");
const formidableMiddleware = require("express-formidable");

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config();
const {PORT = 8002} = process.env;
const app = express();
app.use(formidableMiddleware());



const carsRouter = require("./routers/cars.router");
const userRouter = require("./routers/users.router")
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Challenge-06",
        version: "0.1.0",
        description:
          "This submission for Challenge-06 made with Express, JWT token authentication, and documented with Swagger",
        license: {
          name: "Dila Rizvina N",
          url: "",
        },
        contact: {
          name: "",
          url: "",
          email: "",
        },
      },
      servers: [
        {
          url: `http://localhost:${PORT}/api/`,
        },
      ],
    },
    apis: [ "./routers/users.router.js",
            "./routers/cars.router.js"
    ],
};
  
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/cars", carsRouter);
app.use("/api/users", userRouter);
 
app.listen(PORT, () => {
    console.log(`App listen on PORT:${PORT}.`)
})