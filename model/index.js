import Ticket from "./TicketModel.js";
import Pembeli from "./PembeliModel.js";
import Film from "./FilmModel.js";
import db from "../utils/connection.js";
// await db.query("ALTER TABLE Ticket AUTO_INCREMENT = 1");
await db.sync({alter:true}); 
