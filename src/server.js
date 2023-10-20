const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index.routes"); //<=todas las rutas
const server = express(); //=> {}.get .post .use()

/* ------MIDDLEWARES---------------------------------------------------------- */
/* middleware para aceptar jsons */
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
/* ----------------------CORS----------------------------------------- */
/* Para aceptar peticiones */
server.use(cors());
/* -----------------------RUTAS------------- */
/* Para los endpoints */
server.use("/", routes); //localhost:3000/

server.use("/", express.static("fe"));

module.exports = server;
