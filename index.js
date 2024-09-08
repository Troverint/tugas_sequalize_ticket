// import router from "./routes/router.js";
// import Book from"./model/BookModel.js";
// await db.sync(
// ## force digunakan Ketsko Function db.sync dijalankan maka akan deres schio data yang ada di database
// { force: true }
//):
// db.sync() adalah function yang digunakan mengecek ketika tabel belum ada maka akan dibuatkan
// app.use (router);
import express, { Router } from "express";
import Ticket from "./model/TicketModel.js";
import Pembeli from "./model/PembeliModel.js";
import Film from "./model/FilmModel.js";
import "dotenv/config";
import db from "./utils/connection.js";
import "./model/index.js"
// import "./model/relasi.js"

import router from "./routes/Route.js";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
app.use(bodyParser.json())

app.use("/", router)
const port = process.env.PORT;


app.listen(port, () => {
  console.log("server is running in port http://localhost:" + port);
});
