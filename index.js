import express, { Router } from "express";
import Ticket from "./model/TicketModel.js";
import Pembeli from "./model/PembeliModel.js";
import Film from "./model/FilmModel.js";
import "dotenv/config";
import db from "./utils/connection.js";
import "./model/index.js";

import router from "./routes/Route.js";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use("/", router);
const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is running in port http://localhost:" + port);
});
